module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src/assets',
            rootPathPrefix: '@assets',
          },
          {
            rootPathSuffix: './src/components',
            rootPathPrefix: '@components',
          },
          {
            rootPathSuffix: './src/navigation',
            rootPathPrefix: '@navigation',
          },
          {
            rootPathSuffix: './src/models',
            rootPathPrefix: '@models',
          },
          {
            rootPathSuffix: './src/screens',
            rootPathPrefix: '@screens',
          },
          {
            rootPathSuffix: './src/redux',
            rootPathPrefix: '@store',
          },
          {
            rootPathSuffix: './src/constants',
            rootPathPrefix: '@constants',
          },
          {
            rootPathSuffix: './src/utils',
            rootPathPrefix: '@utils',
          },
        ],
      },
    ],
  ],
};
