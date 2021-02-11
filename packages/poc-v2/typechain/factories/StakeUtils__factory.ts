/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StakeUtils } from "../StakeUtils";

export class StakeUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(api3TokenAddress: string, overrides?: Overrides): Promise<StakeUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<StakeUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): StakeUtils {
    return super.attach(address) as StakeUtils;
  }
  connect(signer: Signer): StakeUtils__factory {
    return super.connect(signer) as StakeUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakeUtils {
    return new Contract(address, _abi, signerOrProvider) as StakeUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "api3TokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newApr",
        type: "uint256",
      },
    ],
    name: "Epoch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scheduledFor",
        type: "uint256",
      },
    ],
    name: "ScheduleUnstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Unstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "depositAndStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "genesisEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "getCurrentUserLock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardVestingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "bool",
        name: "paid",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "atBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "scheduleUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "totalStakeAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unstakeAndWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unstakeWaitPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCoeff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "updateUserLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "unstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledFor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateEpoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052622625a060055563047868c06006556a084595161401484a000000600755620f424060085562093a80600955600554600a553480156200004357600080fd5b5060405162002ede38038062002ede833981810160405260208110156200006957600080fd5b8101908080519060200190929190505050808080600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200018761a8c0426200019860201b620020da1790919060201c565b6080818152505050505050620002b5565b6000620001e283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250620001ea60201b60201c565b905092915050565b600080831182906200029a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200025e57808201518184015260208101905062000241565b50505050905090810190601f1680156200028c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581620002a757fe5b049050809150509392505050565b608051612bff620002df60003980611243528061127e5280611af3528061257e5250612bff6000f3fe608060405234801561001057600080fd5b50600436106101c35760003560e01c806370a08231116100f9578063b6ca956311610097578063e7460a5211610071578063e7460a521461070a578063f301af4214610728578063f3fef3a31461077a578063f45346dc146107c8576101c3565b8063b6ca956314610680578063b70e6be6146106ce578063decac4f5146106ec576101c3565b806392093b36116100d357806392093b361461057e578063981b24d01461059c578063a694fc3a146105de578063a87430ba1461060c576101c3565b806370a08231146104ea578063784b3c5d146105425780638b0e9f3f14610560576101c3565b806320a0a0e91161016657806341cb8c201161014057806341cb8c20146104035780634eb05c471461044c5780634f322ae81461046a5780635489757714610488576101c3565b806320a0a0e914610399578063276e0058146103b75780632def6620146103f9576101c3565b806311281a19116101a257806311281a191461027657806313f2dad0146102e4578063169ebe841461032d57806318160ddd1461037b576101c3565b806201e862146101c8578063106644131461022a578063106d08df14610248575b600080fd5b610214600480360360408110156101de57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610836565b6040518082815260200191505060405180910390f35b61023261088b565b6040518082815260200191505060405180910390f35b6102746004803603602081101561025e57600080fd5b8101908080359060200190929190505050610891565b005b6102e26004803603606081101561028c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c7e565b005b610310600480360360208110156102fa57600080fd5b8101908080359060200190929190505050610c97565b604051808381526020018281526020019250505060405180910390f35b6103796004803603604081101561034357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cc8565b005b610383610cde565b6040518082815260200191505060405180910390f35b6103a1610d71565b6040518082815260200191505060405180910390f35b6103e3600480360360208110156103cd57600080fd5b8101908080359060200190929190505050610d77565b6040518082815260200191505060405180910390f35b610401610d8b565b005b61042f6004803603602081101561041957600080fd5b810190808035906020019092919050505061116d565b604051808381526020018281526020019250505060405180910390f35b61045461119e565b6040518082815260200191505060405180910390f35b6104726111a4565b6040518082815260200191505060405180910390f35b6104d46004803603604081101561049e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506111aa565b6040518082815260200191505060405180910390f35b61052c6004803603602081101561050057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114ca565b6040518082815260200191505060405180910390f35b61054a61157c565b6040518082815260200191505060405180910390f35b610568611582565b6040518082815260200191505060405180910390f35b610586611615565b6040518082815260200191505060405180910390f35b6105c8600480360360208110156105b257600080fd5b810190808035906020019092919050505061161b565b6040518082815260200191505060405180910390f35b61060a600480360360208110156105f457600080fd5b810190808035906020019092919050505061162f565b005b61064e6004803603602081101561062257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611935565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b6106cc6004803603604081101561069657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061196b565b005b6106d6611af1565b6040518082815260200191505060405180910390f35b6106f4611b15565b6040518082815260200191505060405180910390f35b610712611b1a565b6040518082815260200191505060405180910390f35b6107546004803603602081101561073e57600080fd5b8101908080359060200190929190505050611b20565b604051808415158152602001838152602001828152602001935050505060405180910390f35b6107c66004803603604081101561079057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611b57565b005b610834600480360360608110156107de57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611f01565b005b6000610883600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010184612124565b905092915050565b60085481565b600061089d60036122b6565b905060006108ab60026122b6565b90506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060006108fe826001016122b6565b9050600061091761a8c0426120da90919063ffffffff16565b9050600083600501600083815260200190815260200160002060009054906101000a900460ff1615801561096257506000600460008481526020019081526020016000206001015414155b15610b435760006004600084815260200190815260200160002090506000610991866001018360020154612124565b905060006109a460028460020154612124565b90506109cf816109c18486600101546122c990919063ffffffff16565b6120da90919063ffffffff16565b935060006109f88a6109ea878c6122c990919063ffffffff16565b6120da90919063ffffffff16565b905086811115610a06578690505b610a19818861234f90919063ffffffff16565b9650610a2e818a61234f90919063ffffffff16565b985087600101604051806040016040528043815260200189815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600260405180604001604052804381526020018b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084886002015411610af0576000610b08565b610b0785896002015461234f90919063ffffffff16565b5b8860020181905550600188600501600088815260200190815260200160002060006101000a81548160ff021916908315150217905550505050505b6000610b6a86610b5c89876122c990919063ffffffff16565b6120da90919063ffffffff16565b9050610b7f828261239990919063ffffffff16565b881115610bf4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f496e73756666696369656e7420616d6f756e740000000000000000000000000081525060200191505060405180910390fd5b610c096009544261239990919063ffffffff16565b85600301819055508785600401819055503373ffffffffffffffffffffffffffffffffffffffff167fbe333ba89af2daf0172a0b2d35c3b284379b82470eff81373dcb2dd696573b48898760030154604051808381526020018281526020019250505060405180910390a25050505050505050565b610c89838383611f01565b610c928261162f565b505050565b60028181548110610ca457fe5b90600052602060002090600202016000915090508060000154908060010154905082565b610cd0610d8b565b610cda8282611b57565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff1663981b24d0436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610d3157600080fd5b505afa158015610d45573d6000803e3d6000fd5b505050506040513d6020811015610d5b57600080fd5b8101908080519060200190929190505050905090565b61a8c081565b6000610d84600383612124565b9050919050565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905080600301544211610e47576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f57616974696e6720706572696f6420696e636f6d706c6574650000000000000081525060200191505060405180910390fd5b610e6061a8c0826003015461239990919063ffffffff16565b4210610ed4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f556e7374616b652077696e646f7720686173206578706972656400000000000081525060200191505060405180910390fd5b6000816004015490506000610ee960026122b6565b90506000610ef760036122b6565b90506000610f07856001016122b6565b90506000610f3083610f2287876122c990919063ffffffff16565b6120da90919063ffffffff16565b905081811115610f6557819050610f6284610f5485846122c990919063ffffffff16565b6120da90919063ffffffff16565b94505b610f7c85876000015461239990919063ffffffff16565b8660000181905550856001016040518060400160405280438152602001610fac848661234f90919063ffffffff16565b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060026040518060400160405280438152602001611014848861234f90919063ffffffff16565b8152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506003604051806040016040528043815260200161107c888761234f90919063ffffffff16565b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008660030181905550600086600401819055503373ffffffffffffffffffffffffffffffffffffffff167f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd866040518082815260200191505060405180910390a25050505050506004600061113f61a8c0426120da90919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff1661116b5761116a612421565b5b565b6003818154811061117a57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60075481565b600a5481565b6000806111c261a8c0426120da90919063ffffffff16565b90508083111561123a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f496e76616c69642074617267657400000000000000000000000000000000000081525060200191505060405180910390fd5b600061127060347f000000000000000000000000000000000000000000000000000000000000000061239990919063ffffffff16565b90506000818310156112a2577f00000000000000000000000000000000000000000000000000000000000000006112b7565b6112b660348461234f90919063ffffffff16565b5b90506000600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160060154905060008260020154905060008483106113305761132b60018461239990919063ffffffff16565b611332565b845b90505b8681116113d6576000600460008381526020019081526020016000209050600061136460028360020154612124565b90506000611379876001018460020154612124565b90506113b66113a7836113998487600101546122c990919063ffffffff16565b6120da90919063ffffffff16565b8661239990919063ffffffff16565b94505050506113cf60018261239990919063ffffffff16565b9050611335565b508486106114bb576000858310611400576113fb60018461239990919063ffffffff16565b611402565b855b90505b8681116114b95760006004600061142660348561234f90919063ffffffff16565b81526020019081526020016000209050600061144760028360020154612124565b9050600061145c876001018460020154612124565b905061149961148a8361147c8487600101546122c990919063ffffffff16565b6120da90919063ffffffff16565b8661234f90919063ffffffff16565b94505050506114b260018261239990919063ffffffff16565b9050611405565b505b80965050505050505092915050565b60003073ffffffffffffffffffffffffffffffffffffffff166201e86243846040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561153a57600080fd5b505afa15801561154e573d6000803e3d6000fd5b505050506040513d602081101561156457600080fd5b81019080805190602001909291905050509050919050565b60055481565b60003073ffffffffffffffffffffffffffffffffffffffff1663276e0058436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156115d557600080fd5b505afa1580156115e9573d6000803e3d6000fd5b505050506040513d60208110156115ff57600080fd5b8101908080519060200190929190505050905090565b60065481565b6000611628600283612124565b9050919050565b6004600061164861a8c0426120da90919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff1661167457611673612421565b5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508181600001541015611731576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f416d6f756e7420657863656564732075736572206465706f736974000000000081525060200191505060405180910390fd5b61174882826000015461234f90919063ffffffff16565b8160000181905550600061175c60026122b6565b9050600061176a60036122b6565b905060006117938261178587866122c990919063ffffffff16565b6120da90919063ffffffff16565b905060006117a3856001016122b6565b90508460010160405180604001604052804381526020016117cd858561239990919063ffffffff16565b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060026040518060400160405280438152602001611835858861239990919063ffffffff16565b8152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506003604051806040016040528043815260200161189d898761239990919063ffffffff16565b8152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550503373ffffffffffffffffffffffffffffffffffffffff167febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a876040518082815260200191505060405180910390a2505050505050565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040154908060060154905085565b6004600061198461a8c0426120da90919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff166119b0576119af612421565b5b60003073ffffffffffffffffffffffffffffffffffffffff16635489757784846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015611a2157600080fd5b505afa158015611a35573d6000803e3d6000fd5b505050506040513d6020811015611a4b57600080fd5b8101908080519060200190929190505050905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060181905550505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b603481565b60095481565b60046020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b33611b6d61a8c0426120da90919063ffffffff16565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206006015414611c23576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f5573657220626568696e642063757272656e742065706f63680000000000000081525060200191505060405180910390fd5b81611cbb600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461234f90919063ffffffff16565b1015611d2f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f416d6f756e74206578636565647320617661696c61626c652062616c616e636581525060200191505060405180910390fd5b611d8482600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461234f90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015611e5b57600080fd5b505af1158015611e6f573d6000803e3d6000fd5b505050506040513d6020811015611e8557600080fd5b8101908080519060200190929190505050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b6398846040518082815260200191505060405180910390a3505050565b611f5682600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461239990919063ffffffff16565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8430856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561204b57600080fd5b505af115801561205f573d6000803e3d6000fd5b505050506040513d602081101561207557600080fd5b8101908080519060200190929190505050508073ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c836040518082815260200191505060405180910390a2505050565b600061211c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612887565b905092915050565b6000808380549050141561213b57600090506122b0565b826121546001858054905061234f90919063ffffffff16565b8154811061215e57fe5b90600052602060002090600202016000015482106121b2578261218f6001858054905061234f90919063ffffffff16565b8154811061219957fe5b90600052602060002090600202016001015490506122b0565b826000815481106121bf57fe5b9060005260206000209060020201600001548210156121e157600090506122b0565b6000806121fc6001868054905061234f90919063ffffffff16565b90505b8181111561228d57600061224260026122346001612226878761239990919063ffffffff16565b61239990919063ffffffff16565b6120da90919063ffffffff16565b90508486828154811061225157fe5b9060005260206000209060020201600001541161227057809250612287565b61228460018261234f90919063ffffffff16565b91505b506121ff565b84828154811061229957fe5b906000526020600020906002020160010154925050505b92915050565b60006122c28243612124565b9050919050565b6000808314156122dc5760009050612349565b60008284029050828482816122ed57fe5b0414612344576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612ba96021913960400191505060405180910390fd5b809150505b92915050565b600061239183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061294d565b905092915050565b600080828401905083811015612417576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b612429612a0d565b600061243560036122b6565b905060006124776305f5e100612469603461245b600a54876122c990919063ffffffff16565b6120da90919063ffffffff16565b6120da90919063ffffffff16565b9050600061249061a8c0426120da90919063ffffffff16565b90506040518060600160405280600115158152602001838152602001438152506004600083815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155905050807fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde483600a54604051808381526020018281526020019250505060405180910390a25b6004600061255560018461234f90919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff161580156125b457507f00000000000000000000000000000000000000000000000000000000000000006125b160018361234f90919063ffffffff16565b10155b1561269157604051806060016040528060011515815260200183815260200143815250600460006125ef60018561234f90919063ffffffff16565b815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155905050807fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde483600a54604051808381526020018281526020019250505060405180910390a261268a60018261234f90919063ffffffff16565b905061253d565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561271857600080fd5b505afa15801561272c573d6000803e3d6000fd5b505050506040513d602081101561274257600080fd5b810190808051906020019092919050505061275f57505050612885565b600082141561277057505050612885565b60036040518060400160405280438152602001612796858761239990919063ffffffff16565b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561286957600080fd5b505af115801561287d573d6000803e3d6000fd5b505050505050505b565b60008083118290612933576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156128f85780820151818401526020810190506128dd565b50505050905090810190601f1680156129255780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161293f57fe5b049050809150509392505050565b60008383111582906129fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156129bf5780820151818401526020810190506129a4565b50505050905090810190601f1680156129ec5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60006007541415612a2657600554600a81905550612ba6565b6000612a3260036122b6565b905060006007548210612a5957612a546007548361234f90919063ffffffff16565b612a6f565b612a6e8260075461234f90919063ffffffff16565b5b90506000612a9e600754612a906305f5e100856122c990919063ffffffff16565b6120da90919063ffffffff16565b90506000612acc620f4240612abe600854856122c990919063ffffffff16565b6120da90919063ffffffff16565b905060006007548510612b1f57612b1a6305f5e100612b0c612afb856305f5e10061234f90919063ffffffff16565b600a546122c990919063ffffffff16565b6120da90919063ffffffff16565b612b61565b612b606305f5e100612b52612b41856305f5e10061239990919063ffffffff16565b600a546122c990919063ffffffff16565b6120da90919063ffffffff16565b5b9050600554600a541015612b7d57600554600a81905550612ba0565b600654600a541115612b9757600654600a81905550612b9f565b80600a819055505b5b50505050505b56fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220fd8710cb8192f3d34b9dbbaf8717ff224cdfefc341df57a0ae656191f9e72d0064736f6c634300060c0033";
