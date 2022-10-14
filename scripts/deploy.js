const { ethers } = require('hardhat');
const { NFT_CONTRACT_ADDRESS } = require('../constants');

async function main() {
    const fakeNFTMarketplaceContract = await ethers.getContractFactory(
        'FakeNFTMarketplace'
    );

    const deployedFakeNFTMarketplaceContract =
        await fakeNFTMarketplaceContract.deploy();

    await deployedFakeNFTMarketplaceContract.deployed();

    const fakeNFTMarketplaceContractAddress =
        deployedFakeNFTMarketplaceContract.address;

    console.log(
        'FakeNFTMarketplaceContract address:',
        deployedFakeNFTMarketplaceContract.address
    );

    const cryptoDevsDAOContract = await ethers.getContractFactory(
        'CryptoDevsDAO'
    );
    const deployedCryptoDevsDAOContract = await cryptoDevsDAOContract.deploy(
        fakeNFTMarketplaceContractAddress,
        NFT_CONTRACT_ADDRESS
    );

    await deployedCryptoDevsDAOContract.deployed();

    console.log(
        'CryptoDevsDAOContract address:',
        deployedCryptoDevsDAOContract.address
    );
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
