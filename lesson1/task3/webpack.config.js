const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
            test: /.css$/i,
            use:["style-loader","css-loader"]
            },
                 {
            test: /.js$/i,
            use:["babel-loader"]
        },
        ]
    },
  
    plugins: [
        new HtmlWebpackPlugin(
      {
          template:"./src/index.html"
      })
  ]
};