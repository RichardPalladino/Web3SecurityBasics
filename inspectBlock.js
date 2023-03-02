// EthersJS
const { ethers } = require("ethers");
const WSSProvider = process.env.WSS_Provider;
const ethersProvider = new ethers.providers.WebSocketProvider(WSSProvider);

const inspectBlock = async() => {
    const blockNum = await ethersProvider.getBlockNumber();
    console.log(`We are currently at ${blockNum} block.\nBlock info:\n`);
    const blockInfo = await ethersProvider.getBlock(blockNum);
    console.log(blockInfo);

    inspectTransactions(blockNum);

    // process.exit(1);
}

const inspectTransactions = async(blockNum) => {
    const {transactions} = await ethersProvider.getBlockWithTransactions(blockNum);
    transactions.forEach(function(transaction) {
        console.log(transaction.hash);
        console.log(transaction.to);
    })
}

inspectBlock();