const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.jsx',
    output: {
        filename: 'app.js',
        path: './build'
    },
    devtool: 'eval-source-map',
    target: 'electron',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css?/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(ttf|eot|woff2?|svg)/,
                use: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/app/index.html'
        })
    ]
};
