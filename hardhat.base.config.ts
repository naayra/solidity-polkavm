import 'dotenv/config'
import "@nomicfoundation/hardhat-toolbox";

const config = {
  solidity: "0.8.28",
  networks: {
    baseSepolia: {
      url: process.env.BASE_RPC,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 84532,
    },
  },
};

export default config; 