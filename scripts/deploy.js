const { ethers } = require("hardhat");

(async () => {
  try {
    const TokenFactory = await ethers.getContractFactory("ShibaBrise");
    console.log("Deploying...");
    let token = await TokenFactory.deploy(
      "Shiba Brise",
      "SHIB-BRISE",
      ethers.utils.parseUnits("1000000000000", 18),
      "0xDCcB4aC22E5CaDd542B693DEfb41Aea5553E4749",
      5
    );
    token = await token.deployed();
    console.log(token.address);
  } catch (error) {
    console.log(error);
  }
})();
