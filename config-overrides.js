const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = function override(config, env) {
  config.externals = {
    SmoothScroll: 'smooth-scroll'
  }

  config.module.rules.push({
    test: /\.(scss)$/,
    use: [{ loader: 'postcss-loader' }, { loader: 'sass-loader' }]
  })

  config.module.rules.push({
    test: /\.(config)$/,
    loader: 'file-loader?name=[name].[ext]'
  })

  // config.module.rules.push({
  //   test: /\.(js|jsx)$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: 'babel-loader',

  //       options: {
  //         presets: [
  //           '@babel/preset-react',
  //           {
  //             plugins: ['@babel/plugin-proposal-class-properties']
  //           }
  //         ]
  //       }
  //     },
  //     {
  //       loader: 'eslint-loader'
  //     }
  //   ]
  // })

  config.module.rules.push({ test: /\.html$/, loader: 'html-loader' })

  config.plugins.push(new StyleLintPlugin({ fix: false }))

  return config
}
