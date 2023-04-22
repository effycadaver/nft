const { ethers } = require('hardhat');

(async () => {
  const effy = await hre.ethers.getContract('EFFY');
  const tx = await effy.mintRange(await effy.signer.getAddress(), '1', '13');
  console.log(tx.hash);
  console.log(await tx.wait());
  process.exit(0);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
