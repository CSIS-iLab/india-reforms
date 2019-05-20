const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = function override(config, env) {
  config.externals = {
    SmoothScroll: "smooth-scroll",
    Highcharts: "Highcharts"
  };
  config.devtool = "inline-source-map";


  config.module.rules.push({
    test: /\.(scss|css)$/,
    use: [{ loader: "postcss-loader" }, { loader: "sass-loader" }]
  });

  config.module.rules.push({
    test: /\.(config)$/,
    loader: "file-loader?name=[name].[ext]"
  });

  config.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: "babel-loader",

    options: {
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        {
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      ]
    }
  });

  config.plugins.push(new StyleLintPlugin({ fix: true }));

  return config;
};
