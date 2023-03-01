// EthersJS
const { ethers } = require("ethers");
const WSSProvider = process.env.WSS_Provider;
const ethersProvider = new ethers.providers.WebSocketProvider(WSSProvider);

const inspectBlock = async() => {
    const blockNum = await ethersProvider.getBlockNumber();
    console.log(`We are currently at ${blockNum} block.\nBlock info:\n`);
    const blockInfo = await ethersProvider.getBlock(blockNum);
    console.log(blockInfo)

    // inspectTransactions(blockNum);

    process.exit(1);
}

const getBlockTransactions = async(_blockNum) => {
    const results = await ethersProvider.getBlockWithTransactions(_blockNum);
    return results;
}

const inspectTransactions = async(block=0) => {
    if(block == 0){
        const blockNum = await ethersProvider.getBlockNumber();    
        console.log(`Block #:  ${blockNum}\n`);
        blockTransactions = await getBlockTransactions(blockNum);
        console.log(blockTransactions);
        process.exit(1);
    }
    else {
        blockNum = block;
        console.log(`Block #:  ${blockNum}\n`);
        blockTransactions = await getBlockTransactions(blockNum);
        console.log(blockTransactions);
        return blockTransactions;
    }
}

// inspectBlock();
inspectTransactions();