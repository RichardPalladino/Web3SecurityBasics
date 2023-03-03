const Web3 = require("web3");
const WSSProvider = process.env.WSS_Provider;
const w3 = new Web3(new Web3.providers.WebsocketProvider(WSSProvider));

async function getBlockNum(){
    let blockNum = await w3.eth.getBlockNumber();
    console.log(`Current block # : ${blockNum}`);

    process.exit(1);
}

getBlockNum();