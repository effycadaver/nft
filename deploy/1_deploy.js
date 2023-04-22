'use strict';

const { ethers, deployments } = require('hardhat');

module.exports = async () => {
  const [ signer ] = await ethers.getSigners();
  await deployments.deploy('EFFY', {
    contractName: 'EFFY',
    args: [],
    from: await signer.getAddress()
  });
  const wock = await ethers.getContract('EFFY');
  console.log('deployed EFFY');
};
