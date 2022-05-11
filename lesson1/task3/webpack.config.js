const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
        ],
 
    },
           output: {
    path: path.resolve(__dirname, 'review_build'),
  },
  
    plugins: [
        new HtmlWebpackPlugin(
      {
          template:"./src/index.html"
      })
  ]
};



