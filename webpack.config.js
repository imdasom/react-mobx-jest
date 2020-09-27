console.log('webpack.config.js settings...');

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const OUTPUT_DIR = 'dist';

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, OUTPUT_DIR),
        publicPath: '/',
        filename: '[name].js'
    },
    devServer: {
        port: 3000,
        hot: true,
        contentBase: path.resolve(__dirname, OUTPUT_DIR),
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: './jest-stare/**/*',
                    to: path.resolve(__dirname, OUTPUT_DIR)
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            '@babel/proposal-class-properties',
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            { // images css에서 background-image 속성 loader
                test: /\.(png|woff|woff2|eot|ttf|svg|jpe?g|gif)$/,
                loader:'url-loader',
                options: {
                    outputPath: 'images/',
                    limit: 10000
                }
            },
            { // font loader
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
            },
            {  // scss 또는 css loader
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['*', '.js', '.jsx', 'json', 'css', 'scss'],
    },
};
