require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    base: {
      url: "https://mainnet.base.org", // Or testnet endpoint
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
