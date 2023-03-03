const Web3 = require("web3");
const WSSProvider = process.env.WSS_Provider;
const w3 = new Web3(new Web3.providers.WebsocketProvider(WSSProvider));

async function getTransaction(_txHash){
    let tx = await w3.eth.getTransaction(_txHash);
    if(tx != null){
        // console.log(tx);
        console.log(`To: ${tx.to}`);
        console.log(`From: ${tx.from}`);
        console.log(`Value: ${tx.value}\n\n`);
        return tx;
    }
}

async function viewTransactions(){
    // let subscription = 
    w3.eth.subscribe('pendingTransactions')
    .on("data", async function(transactionHash){
        await getTransaction(transactionHash);
    })
    .on("error", console.error);

    // process.exit(1);
}

viewTransactions();