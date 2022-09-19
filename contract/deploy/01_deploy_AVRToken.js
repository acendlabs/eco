const deployAcendEcoVerifiedRecycler = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy, log } = deployments;

  log("deploying ERC721 AVR Contract");
  const receipt = await deploy("AcendEcoVerifiedRecycler", {
    from: deployer,
    args: [],
    log: true,
  });
  log("deployed ERC721 AVR Book contract at " + receipt.address);
};

export default deployAcendEcoVerifiedRecycler;
deployAcendEcoVerifiedRecycler.tags = ["all", "AVR"];
