const Web3 = require("web3");
const WSSProvider = process.env.WSS_Provider;
const w3 = new Web3(new Web3.providers.WebsocketProvider(WSSProvider));

async function getTransactions(){
    // let subscription = 
    w3.eth.subscribe('pendingTransactions')
    .on("data", function(transactionHashes){
        console.log(`Transaction: ${transactionHashes}`);
    })
    .on("error", console.error);

    // process.exit(1);
}

getTransactions();