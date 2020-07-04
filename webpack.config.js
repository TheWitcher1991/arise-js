'use strict';

const path              = require('path'),
      webpack           = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, './src'),
    build: path.join(__dirname, './build')
};

module.exports = {
    entry: [
        `${PATHS.src}/index.js`,
        `${PATHS.src}/sass/index.sass`
    ],
    output: {
        path: path.resolve(__dirname, PATHS.build),
        filename: `script/arise.min.js`,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, `${PATHS.src}/sass`),
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                sassOptions: {
                                    outputStyle: 'compressed',
                                }
                            }
                        }
                    ]
                })
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.sass', '.css']
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '/style/arise.min.css',
            allChunks: true,
        })
    ]
};