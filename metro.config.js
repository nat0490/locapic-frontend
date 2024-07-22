// // metro.config.js
// const { getDefaultConfig } = require('@expo/metro-config');

// module.exports = (async () => {
//   const config = await getDefaultConfig(__dirname);

//   return {
//     ...config,
//   };
// })();

// metro.config.js
// const { getDefaultConfig } = require('expo/metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig(__dirname);
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter((ext) => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
//     },
//   };
// })();

const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    assetExts: [...defaultConfig.resolver.assetExts, 'ttf', 'png', 'jpg'],
  },
};