const tokenId = process.env.TOKEN_ID;

const { ethers } = require('hardhat');

(async () => {
  const wock = await ethers.getContract('WOCK');
  const uri = await wock.tokenURI('0x96');
  console.log(uri);
  process.exit(0);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
