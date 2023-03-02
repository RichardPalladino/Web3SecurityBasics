// EthersJS
const { ethers } = require("ethers");
const WSSProvider = process.env.WSS_Provider;
const ethersProvider = new ethers.providers.WebSocketProvider(WSSProvider);

const getPendingGas = async() => {
    let gasArray = new Array();
    let avgGas = 0;
    ethersProvider.on("pending", async(txhash) => {
        const transaction = await ethersProvider.getTransaction(txhash);
        if(transaction != null){
            rawGas = transaction.gasPrice;
            gasPrice = ethers.utils.formatEther(rawGas);
            gasArray.push(parseFloat(gasPrice));
            if(gasArray.length > 2){
                avgGas = (gasArray.reduce((total, current) => total + current) / gasArray.length);
                if(gasPrice >= 3*avgGas){
                    console.log(`Transaction: ${transaction.hash}\nConfirmations: ${transaction.confirmations}\nGas price: ${gasPrice}\n`);
                    console.log(`Average gas: ${avgGas}\n`)
                }
            }
        }
    })
    // const myConst = await ethersProvider.someFunction();
    // process.exit(1);
}

const findHighGas = async() => {
    ethersProvider.on("pending", async(txhash) => {
        const transaction = await ethersProvider.getTransaction(txhash);
        if(transaction != null){
            rawGas = transaction.gasPrice;
            gasPrice = ethers.utils.formatEther(rawGas);
            if(parseFloat(gasPrice) >= .001){
                console.log(`Transaction: ${transaction.hash}\nConfirmations: ${transaction.confirmations}\nGas price: ${gasPrice}\n`);
                console.log(`Average gas: ${avgGas}\n`)
            }
        }    
    })
    // const myConst = await ethersProvider.someFunction();
    // process.exit(1);
}

findHighGas();