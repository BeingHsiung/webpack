/**
 * Created by beinghsiung on 01/12/2017.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin =  require('clean-webpack-plugin');

module.exports = {
    entry : {
        app : './src/index.js',
        print : './src/print.js',
    },
    plugins : [
        new cleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title : 'Output Management',
       })
    ],
    output: {
        filename : '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module : {
        rules: [
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'], //An empty string is no longer required.
        modules: [
            'node_modules'
        ]
    }
};


