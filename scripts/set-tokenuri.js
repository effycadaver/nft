const tokenId = process.env.TOKEN_ID;

const { ethers } = require('hardhat');

(async () => {
  const effy = await ethers.getContract('EFFY');
  const tx = await effy.setBaseURI('ipfs://');
  console.log(tx.hash);
  console.log(await tx.wait());
  process.exit(0);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
