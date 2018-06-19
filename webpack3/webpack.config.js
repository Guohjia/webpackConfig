const path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    autoprefixer = require('autoprefixer'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundleProd.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].css",
            disable: false,
            allChunks: true
        }),
        new UglifyJSPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',]
            },

            {
                test: /\.scss$/,
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                use: ['style-loader', 'css-loader', {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },

                },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer]
                            }
                        }
                    }
                ],
                // }),
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    'url-loader?limit=8000',
                    'img-loader'
                ]
                // use: {
                //     loader: 'url-loader',
                //     options: {
                //         limit: 10000,
                //         // name: './images/[name]_[sha512:hash:base64:7].[ext]'
                //     }
                // }
            },
            {
                test: /\.html/,
                use: {
                    loader: "html-loader"
                    // options:{
                    //     minimize: false,
                    //     attrs:false
                    // }
                }
            }
        ]
    },

};