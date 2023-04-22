const tokenId = process.env.TOKEN_ID;

const { ethers } = require('hardhat');

(async () => {
  const wock = await ethers.getContract('WOCK');
  const tx = await wock.setBaseURI('ipfs://bafybeibxam66oqwxrwso3ustte4qogel2waqck6dpywlagae3o5heljrxi/');
  console.log(tx.hash);
  console.log(await tx.wait());
  process.exit(0);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
