const deployACDToken = async function (hre) {
  const { getNamedAccounts, deployments } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy, log } = deployments;

  log("deploying ERC20 USD Token Contract");
  const receipt = await deploy("Acend", {
    from: deployer,
    args: [],
    log: true,
  });
  log("deployed ERC20 ACD Token contract at " + receipt.address);
};

export default deployACDToken;
deployACDToken.tags = ["all", "ACD"];
