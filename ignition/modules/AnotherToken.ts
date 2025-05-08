// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AnotherTokenModule = buildModule("AnotherTokenModule", (m) => {
  // Get the deployer address as the initial owner
  const initialOwner = m.getAccount(0);

  const anotherToken = m.contract("AnotherToken", [initialOwner]);

  return { anotherToken };
});

export default AnotherTokenModule; 