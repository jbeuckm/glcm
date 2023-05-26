const path = require('path')

const isProduction = process.env.NODE_ENV == 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/GLCM.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'glcm.js',
    library: { name: 'GLCM', type: 'umd', export: 'GLCM' },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
