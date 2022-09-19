import { ethers, deployments, network } from "hardhat";

const main = async () => {
  if (network.config.chainId === 31337)
    await deployments.fixture(["all"], { keepExistingDeployments: true });

  const nftContract = await deployments.get("ThirdBook");
  const ecoContract = await deployments.get("ThirdBookShop");

  console.log("nftcontract: " + nftContract.address);
  console.log("ecoContract: " + ecoContract.address);

  const contract = await ethers.getContractAt(nftContract.abi, nftContract.address);

  const minter = await contract.MINTER_ROLE();
  const receipt = await contract.grantRole(minter, ecoContract.address);
  console.log(receipt);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
