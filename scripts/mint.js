const tokenId = process.env.TOKEN_ID;

const { ethers } = require('hardhat');

(async () => {
  const wock = await ethers.getContract('WOCK');
  const tx = await wock.mint('0x779d9bb1acf14fad38265f94ac95bc85faad37e9', process.env.TOKEN_ID);
  console.log(tx.hash);
  console.log(await tx.wait());
  process.exit(0);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
