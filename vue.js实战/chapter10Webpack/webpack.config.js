const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'main.js')
    },
    output: {

        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'index.css',
            //chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/,
           /*  use: [
                MiniCssExtractPlugin.loader,
               'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ], */
             use: [{
                     loader: MiniCssExtractPlugin.loader,
                     options: {
                         // you can specify a publicPath here
                         // by default it uses publicPath in webpackOptions.output
                         publicPath: '../',
                         
                     },
                 },
                 'css-loader',
             ],
        }]
    }
}