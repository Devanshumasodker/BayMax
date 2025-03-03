//const { get } = require("react-native/Libraries/TurboModule/TurboModuleRegistry");

module.exports = {
    project: {
        ios: {},
        android: {}
    },
    assets: ['./src/assets/fonts/'], // Updated path to fonts
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                ios: null
            }
        }
    },
    getTransformModulePath() {
        return require.resolve('react-native-typescript-transformer');
    },
    getSourceExts() {
        return ['ts', 'tsx'];
    }
};