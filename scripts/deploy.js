const { ethers } = require("hardhat");

(async () => {
  try {
    const TokenFactory = await ethers.getContractFactory("FlokiBrise");
    console.log("Deploying...");
    let token = await TokenFactory.deploy(
      "Floki Brise",
      "FLO-BRISE",
      ethers.utils.parseUnits("1000000000000", 18),
      "0xDCcB4aC22E5CaDd542B693DEfb41Aea5553E4749",
      8
    );
    token = await token.deployed();
    console.log(token.address);
  } catch (error) {
    console.log(error);
  }
})();
