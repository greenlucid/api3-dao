/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TransferUtilsInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "balanceOfAt(uint256,address)": FunctionFragment;
    "currentApr()": FunctionFragment;
    "deposit(address,uint256,address)": FunctionFragment;
    "genesisEpoch()": FunctionFragment;
    "getCurrentUserLock(address,uint256)": FunctionFragment;
    "maxApr()": FunctionFragment;
    "minApr()": FunctionFragment;
    "rewardEpochLength()": FunctionFragment;
    "rewardVestingPeriod()": FunctionFragment;
    "rewards(uint256)": FunctionFragment;
    "stakeTarget()": FunctionFragment;
    "totalShares(uint256)": FunctionFragment;
    "totalStake()": FunctionFragment;
    "totalStakeAt(uint256)": FunctionFragment;
    "totalStaked(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "totalSupplyAt(uint256)": FunctionFragment;
    "unstakeWaitPeriod()": FunctionFragment;
    "updateCoeff()": FunctionFragment;
    "updateUserLock(address,uint256)": FunctionFragment;
    "users(address)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balanceOfAt",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "currentApr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "genesisEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentUserLock",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "maxApr", values?: undefined): string;
  encodeFunctionData(functionFragment: "minApr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardEpochLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardVestingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeTarget",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalStakeAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalStaked",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeWaitPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateCoeff",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateUserLock",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "users", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "currentApr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "genesisEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentUserLock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxApr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minApr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardEpochLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardVestingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeTarget",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalStakeAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeWaitPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCoeff",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateUserLock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "Epoch(uint256,uint256,uint256)": EventFragment;
    "Withdrawal(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Epoch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export class TransferUtils extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TransferUtilsInterface;

  functions: {
    balanceOf(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOf(address)"(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfAt(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOfAt(uint256,address)"(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    currentApr(overrides?: CallOverrides): Promise<[BigNumber]>;

    "currentApr()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      source: string,
      amount: BigNumberish,
      userAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deposit(address,uint256,address)"(
      source: string,
      amount: BigNumberish,
      userAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    genesisEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    "genesisEpoch()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCurrentUserLock(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getCurrentUserLock(address,uint256)"(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxApr(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxApr()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minApr(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minApr()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardEpochLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "rewardEpochLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardVestingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    "rewardVestingPeriod()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        paid: boolean;
        amount: BigNumber;
        atBlock: BigNumber;
      }
    >;

    "rewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        paid: boolean;
        amount: BigNumber;
        atBlock: BigNumber;
      }
    >;

    stakeTarget(overrides?: CallOverrides): Promise<[BigNumber]>;

    "stakeTarget()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalShares(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "totalShares(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    totalStake(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalStake()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalStakeAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalStakeAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalStaked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "totalStaked(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupplyAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalSupplyAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    unstakeWaitPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    "unstakeWaitPeriod()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateCoeff(overrides?: CallOverrides): Promise<[BigNumber]>;

    "updateCoeff()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateUserLock(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateUserLock(address,uint256)"(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        unstaked: BigNumber;
        locked: BigNumber;
        unstakeScheduledFor: BigNumber;
        unstakeAmount: BigNumber;
        lastUpdateEpoch: BigNumber;
      }
    >;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        unstaked: BigNumber;
        locked: BigNumber;
        unstakeScheduledFor: BigNumber;
        unstakeAmount: BigNumber;
        lastUpdateEpoch: BigNumber;
      }
    >;

    withdraw(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(address,uint256)"(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  balanceOf(userAddress: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfAt(
    fromBlock: BigNumberish,
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOfAt(uint256,address)"(
    fromBlock: BigNumberish,
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentApr(overrides?: CallOverrides): Promise<BigNumber>;

  "currentApr()"(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    source: string,
    amount: BigNumberish,
    userAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deposit(address,uint256,address)"(
    source: string,
    amount: BigNumberish,
    userAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  genesisEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  "genesisEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentUserLock(
    userAddress: string,
    targetEpoch: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getCurrentUserLock(address,uint256)"(
    userAddress: string,
    targetEpoch: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxApr(overrides?: CallOverrides): Promise<BigNumber>;

  "maxApr()"(overrides?: CallOverrides): Promise<BigNumber>;

  minApr(overrides?: CallOverrides): Promise<BigNumber>;

  "minApr()"(overrides?: CallOverrides): Promise<BigNumber>;

  rewardEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

  "rewardEpochLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  rewardVestingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  "rewardVestingPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

  rewards(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber] & {
      paid: boolean;
      amount: BigNumber;
      atBlock: BigNumber;
    }
  >;

  "rewards(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber] & {
      paid: boolean;
      amount: BigNumber;
      atBlock: BigNumber;
    }
  >;

  stakeTarget(overrides?: CallOverrides): Promise<BigNumber>;

  "stakeTarget()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalShares(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  "totalShares(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  totalStake(overrides?: CallOverrides): Promise<BigNumber>;

  "totalStake()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalStakeAt(
    fromBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalStakeAt(uint256)"(
    fromBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalStaked(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  "totalStaked(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
  >;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyAt(
    fromBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalSupplyAt(uint256)"(
    fromBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unstakeWaitPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  "unstakeWaitPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

  updateCoeff(overrides?: CallOverrides): Promise<BigNumber>;

  "updateCoeff()"(overrides?: CallOverrides): Promise<BigNumber>;

  updateUserLock(
    userAddress: string,
    targetEpoch: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateUserLock(address,uint256)"(
    userAddress: string,
    targetEpoch: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  users(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      unstaked: BigNumber;
      locked: BigNumber;
      unstakeScheduledFor: BigNumber;
      unstakeAmount: BigNumber;
      lastUpdateEpoch: BigNumber;
    }
  >;

  "users(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      unstaked: BigNumber;
      locked: BigNumber;
      unstakeScheduledFor: BigNumber;
      unstakeAmount: BigNumber;
      lastUpdateEpoch: BigNumber;
    }
  >;

  withdraw(
    destination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(address,uint256)"(
    destination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfAt(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfAt(uint256,address)"(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentApr(overrides?: CallOverrides): Promise<BigNumber>;

    "currentApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      source: string,
      amount: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposit(address,uint256,address)"(
      source: string,
      amount: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    genesisEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    "genesisEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentUserLock(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCurrentUserLock(address,uint256)"(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxApr(overrides?: CallOverrides): Promise<BigNumber>;

    "maxApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    minApr(overrides?: CallOverrides): Promise<BigNumber>;

    "minApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardEpochLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardVestingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardVestingPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        paid: boolean;
        amount: BigNumber;
        atBlock: BigNumber;
      }
    >;

    "rewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        paid: boolean;
        amount: BigNumber;
        atBlock: BigNumber;
      }
    >;

    stakeTarget(overrides?: CallOverrides): Promise<BigNumber>;

    "stakeTarget()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "totalShares(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    totalStake(overrides?: CallOverrides): Promise<BigNumber>;

    "totalStake()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalStakeAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalStakeAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalStaked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    "totalStaked(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { fromBlock: BigNumber; value: BigNumber }
    >;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalSupplyAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakeWaitPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "unstakeWaitPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateCoeff(overrides?: CallOverrides): Promise<BigNumber>;

    "updateCoeff()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateUserLock(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateUserLock(address,uint256)"(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        unstaked: BigNumber;
        locked: BigNumber;
        unstakeScheduledFor: BigNumber;
        unstakeAmount: BigNumber;
        lastUpdateEpoch: BigNumber;
      }
    >;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        unstaked: BigNumber;
        locked: BigNumber;
        unstakeScheduledFor: BigNumber;
        unstakeAmount: BigNumber;
        lastUpdateEpoch: BigNumber;
      }
    >;

    withdraw(
      destination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,uint256)"(
      destination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Deposit(user: string | null, amount: null): EventFilter;

    Epoch(
      epoch: BigNumberish | null,
      rewardAmount: null,
      newApr: null
    ): EventFilter;

    Withdrawal(
      user: string | null,
      destination: string | null,
      amount: null
    ): EventFilter;
  };

  estimateGas: {
    balanceOf(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfAt(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfAt(uint256,address)"(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentApr(overrides?: CallOverrides): Promise<BigNumber>;

    "currentApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      source: string,
      amount: BigNumberish,
      userAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deposit(address,uint256,address)"(
      source: string,
      amount: BigNumberish,
      userAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    genesisEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    "genesisEpoch()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentUserLock(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCurrentUserLock(address,uint256)"(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxApr(overrides?: CallOverrides): Promise<BigNumber>;

    "maxApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    minApr(overrides?: CallOverrides): Promise<BigNumber>;

    "minApr()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardEpochLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardVestingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardVestingPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "rewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakeTarget(overrides?: CallOverrides): Promise<BigNumber>;

    "stakeTarget()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalShares(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalStake(overrides?: CallOverrides): Promise<BigNumber>;

    "totalStake()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalStakeAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalStakeAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalStaked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalStaked(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalSupplyAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakeWaitPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "unstakeWaitPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateCoeff(overrides?: CallOverrides): Promise<BigNumber>;

    "updateCoeff()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateUserLock(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateUserLock(address,uint256)"(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    users(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdraw(address,uint256)"(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfAt(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOfAt(uint256,address)"(
      fromBlock: BigNumberish,
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentApr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentApr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      source: string,
      amount: BigNumberish,
      userAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deposit(address,uint256,address)"(
      source: string,
      amount: BigNumberish,
      userAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    genesisEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "genesisEpoch()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentUserLock(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCurrentUserLock(address,uint256)"(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxApr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxApr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minApr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minApr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardEpochLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardEpochLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardVestingPeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardVestingPeriod()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakeTarget(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stakeTarget()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalShares(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalStake()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalStakeAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalStakeAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalStaked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalStaked(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupplyAt(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalSupplyAt(uint256)"(
      fromBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unstakeWaitPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "unstakeWaitPeriod()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateCoeff(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "updateCoeff()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateUserLock(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateUserLock(address,uint256)"(
      userAddress: string,
      targetEpoch: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    users(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "users(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(address,uint256)"(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
