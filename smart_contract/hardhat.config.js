require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ObUHS6fwR0wvvQI3VlUfb4VAQz_7Rs8C',
      accounts: [ 'cfe85e6c0d65c9322972e9f12269b66c15391aa2a78f6a8344f96e6794f2c05b']
    }
  }
}
