// EthersJS
const { ethers } = require("ethers");
const WSSProvider = process.env.WSS_Provider;
const ethersProvider = new ethers.providers.WebSocketProvider(WSSProvider);

const defaultFunction = async() => {
    console.log("Stuff happens here.");
    // const myConst = await ethersProvider.someFunction();
    process.exit(1);
}

defaultFunction();