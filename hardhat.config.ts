import 'dotenv/config'
import "@nomicfoundation/hardhat-toolbox";
import "@parity/hardhat-polkadot-resolc";

const config = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      polkavm: true
    },
    westendAssetHub: {
      polkavm: true,
      url: 'https://westend-asset-hub-eth-rpc.polkadot.io',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  resolc: {
    compilerSource: 'npm',
  },
};

export default config;
