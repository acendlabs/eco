require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

const config = {
  solidity: "0.8.10",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 5,
      saveDeployments: true,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    outputFile: "gas-report.txt",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "",
  },
  paths: {
    artifacts: "./contract/artifacts",
    cache: "./contract/cache",
    sources: "./contract/contracts",
    tests: "./contract/tests",
    scripts: "./contract/scripts",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

module.exports = config;
