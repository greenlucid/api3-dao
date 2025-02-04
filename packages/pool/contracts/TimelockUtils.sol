//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./ClaimUtils.sol";
import "./interfaces/ITimelockUtils.sol";

/// @title Contract that implements vesting functionality
/// @dev The TimelockManager contract interfaces with this contract to transfer
/// API3 tokens that are locked under a vesting schedule.
/// This contract keeps its own type definitions, event declarations and state
/// variables for them to be easier to remove for a subDAO where they will
/// likely not be used.
abstract contract TimelockUtils is ClaimUtils, ITimelockUtils {
    struct Timelock {
        uint256 totalAmount;
        uint256 remainingAmount;
        uint256 releaseStart;
        uint256 releaseEnd;
    }

    /// @notice Maps user addresses to timelocks
    /// @dev This implies that a user cannot have multiple timelocks
    /// transferred from the TimelockManager contract. This is acceptable
    /// because TimelockManager is implemented in a way to not allow multiple
    /// timelocks per user.
    mapping(address => Timelock) public userToTimelock;

    /// @notice Called by the TimelockManager contract to deposit tokens on
    /// behalf of a user
    /// @dev This method is only usable by `TimelockManager.sol`.
    /// It is named as `deposit()` and not `depositAsTimelockManager()` for
    /// example, because the TimelockManager is already deployed and expects
    /// the `deposit(address,uint256,address)` interface.
    /// @param source Token transfer source
    /// @param amount Amount to be deposited
    /// @param userAddress User that the tokens will be deposited for
    function deposit(
        address source,
        uint256 amount,
        address userAddress
        )
        external
        override
    {
        require(
            msg.sender == timelockManager,
            "Pool: Caller not TimelockManager"
            );
        uint256 unstakedUpdate = users[userAddress].unstaked + amount;
        users[userAddress].unstaked = unstakedUpdate;
        // Should never return false because the API3 token uses the
        // OpenZeppelin implementation
        assert(api3Token.transferFrom(source, address(this), amount));
        emit DepositedByTimelockManager(
            userAddress,
            amount,
            unstakedUpdate
            );
    }

    /// @notice Called by the TimelockManager contract to deposit tokens on
    /// behalf of a user on a linear vesting schedule
    /// @dev Refer to `TimelockManager.sol` to see how this is used
    /// @param source Token source
    /// @param amount Token amount
    /// @param userAddress Address of the user who will receive the tokens
    /// @param releaseStart Vesting schedule starting time
    /// @param releaseEnd Vesting schedule ending time
    function depositWithVesting(
        address source,
        uint256 amount,
        address userAddress,
        uint256 releaseStart,
        uint256 releaseEnd
        )
        external
        override
    {
        require(
            msg.sender == timelockManager,
            "Pool: Caller not TimelockManager"
            );
        require(
            userToTimelock[userAddress].remainingAmount == 0,
            "Pool: User has active timelock"
            );
        require(
            releaseEnd > releaseStart,
            "Pool: Timelock start after end"
            );
        require(
            amount != 0,
            "Pool: Timelock amount zero"
            );
        uint256 unstakedUpdate = users[userAddress].unstaked + amount;
        users[userAddress].unstaked = unstakedUpdate;
        uint256 vestingUpdate = users[userAddress].vesting + amount;
        users[userAddress].vesting = vestingUpdate;
        userToTimelock[userAddress] = Timelock({
            totalAmount: amount,
            remainingAmount: amount,
            releaseStart: releaseStart,
            releaseEnd: releaseEnd
            });
        // Should never return false because the API3 token uses the
        // OpenZeppelin implementation
        assert(api3Token.transferFrom(source, address(this), amount));
        emit DepositedVesting(
            userAddress,
            amount,
            releaseStart,
            releaseEnd,
            unstakedUpdate,
            vestingUpdate
            );
    }

    /// @notice Called to release tokens vested by the timelock
    /// @param userAddress Address of the user whose timelock status will be
    /// updated
    function updateTimelockStatus(address userAddress)
        external
        override
    {
        Timelock storage timelock = userToTimelock[userAddress];
        require(
            block.timestamp > timelock.releaseStart,
            "Pool: Release not started yet"
            );
        require(
            timelock.remainingAmount > 0,
            "Pool: Timelock already released"
            );
        uint256 totalUnlocked;
        if (block.timestamp >= timelock.releaseEnd)
        {
            totalUnlocked = timelock.totalAmount;
        }
        else
        {
            uint256 passedTime = block.timestamp - timelock.releaseStart;
            uint256 totalTime = timelock.releaseEnd - timelock.releaseStart;
            totalUnlocked = timelock.totalAmount * passedTime / totalTime;
        }
        uint256 previouslyUnlocked = timelock.totalAmount - timelock.remainingAmount;
        uint256 newlyUnlocked = totalUnlocked - previouslyUnlocked;
        User storage user = users[userAddress];
        uint256 vestingUpdate = user.vesting - newlyUnlocked;
        user.vesting = vestingUpdate;
        timelock.remainingAmount -= newlyUnlocked;
        emit VestedTimelock(
            userAddress,
            newlyUnlocked,
            vestingUpdate
            );
    }
}
