require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// module.exports = {
//   solidity: "0.8.1",
//   networks: {
//     rinkeby: {
//       url: "https://eth-rinkeby.alchemyapi.io/v2/rk0okGYntUstTB830S5GEZO3GgE8na1r",
//       accounts: [
//         "4732bab93241b0237fd754e9e1e7333cd3456c490fe24fc8b66113881988454b",
//       ],
//     },
//   },
// };

require("dotenv").config();

module.exports = {
  solidity: "0.8.1",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    // etherscan: {
    //   // Your API key for Etherscan
    //   // Obtain one at https://etherscan.io/
    //   apiKey: process.env.ETHERSCAN_API_KEY,
    // },
  },
};
