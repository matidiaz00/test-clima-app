var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'none',
    entry: {
        main: './dev/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'prod/'),
        filename: 'javascript.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '/prod/'),
        watchContentBase: true,
        port: 3030,
        compress: true,
        proxy: [
            {
                context: ['/api/**'],
                target: 'http://localhost:8082',
                secure: false
            }
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000,
                        name: 'assets/[name].[ext]'
                    } 
                }]
            },
            {
                test: /\.(png|mp4)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['prod']),
        new ExtractTextPlugin("styles.css"),
        new CopyWebpackPlugin([
            {
                from: './dev/server.js',
                to: '../prod/',
                flatten: true
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: './dev/server/*.js',
                to: '../prod/server/',
                flatten: true
            }
        ]),
        new HtmlWebpackPlugin({
            title: 'Weather App',
            filename: 'index.html',
            template: './dev/index.html'
        })
    ]
}