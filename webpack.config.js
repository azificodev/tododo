const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',
    optimization: {
        minimizer: [new OptimizeCss()]
    },
    module: {
        rules: [ 
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, 
            {
                test: /styles\.css$/,
                use: [
                    MiniCss.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize:false}
                    }
                ]
            
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCss({
            filename: '[name].css',
            ignoreOrder: false
        })
    ]
}