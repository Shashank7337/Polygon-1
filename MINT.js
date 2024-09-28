// This script batch mints ERC721A tokens.

const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  
  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress =
    "https://ethereum-sepolia-rpc.publicnode.com";

  
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

 
  const signer = new ethers.Wallet(privateKey, provider);

 
  const contractAddress = "0x4f1a9B67cDf2f6315404933821E18Bf8Cee4fb14";

 
  const OneNFT = await ethers.getContractFactory("Dinar", signer);
  const contract = await OneNFT.attach(contractAddress);

  
  await contract.mint(5);

  console.log("successfully minted '5' tokens.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 