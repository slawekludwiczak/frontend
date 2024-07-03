const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 8888,
        open: true
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true //clean dist folder before build
    },

    module: {
        rules: [
            //importing css files in js files
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            //importing assets in js files
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Title from webpack.config.js'
        }),
    ],
};