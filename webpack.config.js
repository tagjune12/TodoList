import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import path from 'path';

export default {

    entry: {
        router: './JavaScript/lib/router.js',
        // app: './index.js'
        main: './index.js'
    },

    output: {
        // path: resolve(__dirname, './dist'),
        path: path.resolve('./dist'),
        filename: '[name].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // output file name
            template: 'index.html'  // template file name
        }),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        })
    ],

    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    mode: 'development',

    devServer: {
        publicPath: "/",
        // host: "dev.domain.com",
        overlay: true,
        // port: 8081,
        // stats: "errors-only",
        historyApiFallback: true,
    }
};