// import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@parity/hardhat-polkadot-resolc";

const config = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      polkavm: true
    }
  },
  resolc: {
    compilerSource: 'npm',
  },
};

export default config;
