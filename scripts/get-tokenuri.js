const tokenId = process.env.TOKEN_ID;

const { ethers } = require('hardhat');

(async () => {
  const effy = await ethers.getContract('EFFY');
  const uri = await effy.tokenURI('0x96');
  console.log(uri);
  process.exit(0);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
