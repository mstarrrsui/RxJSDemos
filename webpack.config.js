const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/main.ts',
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'RxJS Demos',
            template: 'index.html'
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        "path": path.join(process.cwd(), "dist"),
        "filename": "[name].bundle.js"
    }
};