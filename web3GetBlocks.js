const Web3 = require("web3");
const WSSProvider = process.env.WSS_Provider;
const w3 = new Web3(new Web3.providers.WebsocketProvider(WSSProvider));

async function getBlocks(){
    // let subscription = 
    w3.eth.subscribe('newBlockHeaders')
    .on("data", function(blockData){
        console.log(blockData.number);
    })
    .on("error", console.error);

    // process.exit(1);
}

getBlocks();