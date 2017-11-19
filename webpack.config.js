const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: './src/index.js', // entry file
    output: {
        path: path.resolve(__dirname, './public'), // output path
        filename: 'output.js' // output filename
    },
    module: {
        rules: [
            {
                test: /\.js$/, // files ending with.js
                exclude: /node_modules/, // exclude node_modules directory
                loader: "babel-loader" // use this (babel-core) loader
            },
            {
                test: /\.scss$/, // files ending with .scss
                use: ExtractTextWebpackPlugin.extract({ // call our plugin with extract method
                  use: ['css-loader', 'sass-loader'], // use this loaders
                  fallback: 'style-loader' // fallback for any CSS not extracted
                }) // end extract
            }
        ] // end rules
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css') // call the ExtractTextWebpackPlugin constructor and name our css file
    ]
}

module.exports = config;