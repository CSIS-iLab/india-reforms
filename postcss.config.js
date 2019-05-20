module.exports = {
  plugins: [
    require("postcss-import")({
      plugins: [require("stylelint")]
    }),
    require("postcss-preset-env")({
      autoprefixer: {
        grid: "autoplace",
        browsers: ["> 1%", "last 2 versions", "Firefox ESR"]
      },
      features: {
        "nesting-rules": true
      },
      cssnano: {
        present: "default"
      }
    })
  ]
};
