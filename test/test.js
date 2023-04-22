const hre = require('hardhat');
describe('EFFY.sol', () => {
  before(async () => {
    await hre.deployments.fixture();
    const effy = await hre.ethers.getContract('EFFY');
    await effy.mintRange(await effy.signer.getAddress(), '1', '13');
  });
  it('should get metadata', async () => {
    const effy = await hre.ethers.getContract('EFFY');
    console.log(await effy.tokenURI('0x01'));
  });
});
