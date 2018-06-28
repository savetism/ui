const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OmitJSforCSSPlugin = require("webpack-omit-js-for-css-plugin");
const CssoWebpackPlugin = require("csso-webpack-plugin").default;
const getSemanticLessRule = require("./webpack.rule.semanticLess.js");

module.exports = site => {
  return {
    entry: path.join(__dirname, "../src/semantic/index.js"),
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "index.js"
    },
    module: {
      rules: [getSemanticLessRule(site)]
    },
    plugins: [
      new OmitJSforCSSPlugin(),
      new MiniCssExtractPlugin({
        filename: `infinitec-ui.${site}.css`
      }),
      new CssoWebpackPlugin({ pluginOutputPostfix: "min" })
    ],
    resolve: {
      extensions: [".less"]
    }
  };
};
