/* global task ethers */

// import "@nomiclabs/hardhat-waffle";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
import "hardhat-contract-sizer";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";
//import './tasks/generateDiamondABI.js';
import * as dotenv from "dotenv";
import "@typechain/hardhat";
import { BigNumber } from "ethers";

require("hardhat-tracer");

dotenv.config({ path: __dirname + "/.env" });

//  require("./tasks/verifyFacet.js");
require("./tasks/deployUpgrade.ts");
require("./tasks/addBaadgeSvgs.ts");
require("./tasks/mintBaadgeSvgs.ts");
require("./tasks/baadgeAirdrop.ts");
require("./tasks/updateItemDimensions.ts");
require("./tasks/updateSvgs.ts");
require("./tasks/updateItemSideDimensions.ts");
require("./tasks/batchDeposit.ts");
require("./tasks/rarityPayouts");
require("./tasks/grantXP_snapshot");
require("./tasks/grantXP_minigame");
require("./tasks/grantXP");
require("./tasks/addItemTypes");
require("./tasks/addWearableSets");
require("./tasks/grantXP_customValues");
require("./tasks/generateDiamondABI");
require("./tasks/updateWearableExceptions");

export default {
  etherscan: {
    apiKey: process.env.POLYGON_API_KEY || "",
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.MATIC_URL || "",
        timeout: 12000000,
        // blockNumber: 31480850,
      },
      blockGasLimit: 20000000,
      timeout: 120000,
      gas: "auto",
    },

    localhost: {
      timeout: 16000000,
    },

    matic: {
      // dappURL创建地址: https://rpc-mainnet.maticvigil.com/
      url: process.env.MATIC_URL || "",
      accounts: process.env.PRIVATE_KEY || "",
      blockGasLimit: 20000000,
      gasPrice: 400000000000,
      timeout: 90000,
    },

    // polygon链上测试网
    mumbai: {
      url: process.env.MUMBAI_URL || "",
      accounts: process.env.PRIVATE_KEY || "",
      blockGasLimit: 20000000,
      gasPrice: 1000000000,
    },

    // 暂时不用goerli测试网了
    // goerli: {
    //   url: process.env.GOERLI,
    //   accounts: process.env.SECRET,
    //   blockGasLimit: 20000000,
    //   gasPrice: 2100000000,
    // },
  },
};
