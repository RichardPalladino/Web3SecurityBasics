// EthersJS
const { ethers } = require("ethers");
const WSSProvider = process.env.WSS_Provider;
const ethersProvider = new ethers.providers.JsonRpcProvider(WSSProvider);

// ethers and WSS test
const sushiContractABI = [
  "function owner() view returns (address)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
];
const sushiContractAddress = "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2";
const sushiContract = new ethers.Contract(
  sushiContractAddress,
  sushiContractABI,
  ethersProvider
);
console.log(sushiContract);

