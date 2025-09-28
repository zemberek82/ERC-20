const { ethers } = require("hardhat");

async function main() {
  const initialSupply = ethers.utils.parseUnits("1000000", 18); // 1,000,000 tokens

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(initialSupply);

  await myToken.deployed();
  console.log(`MyToken deployed to: ${myToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
