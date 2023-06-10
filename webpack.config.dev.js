const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => 
{
    const mode = 'development'

    const output = {
        folder: '../build',
        css: 'static/css/[name].css',
        js: 'static/js/[name].js',
    };
    const loader = {
        babel: 'babel-loader',
        css: 'css-loader',
        sass: 'sass-loader'
    };
    const exclude = {
        node_modules: '/node_modules/'
    }

    const templateHtml = './public/index.html';

    return {
            mode: mode,
            entry: {
                main: './src/index.js'
            },
            output: {
                publicPath: '/',
                path: path.resolve(__dirname, output.folder),
                filename: output.js,
                clean: true
            },
            plugins: [
                new HtmlWebpackPlugin(
                    {
                    template: templateHtml
                    }
                ),
                new MiniCssExtractPlugin(
                    {
                        filename: output.css
                    }
                ),
            ],
            module: {
                rules: [
                    {
                        test: /\.jpe?g|png$/,
                        exclude: exclude.node_modules,
                        use: ['url-loader', 'file-loader'],
                        generator: {
                            filename: 'static/assets/[name].png'
                        }
                    },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: exclude.node_modules,
                        loader: loader.babel
                    },
                    {
                        test: /\.(css|scss|sass)$/i,
                        use: [
                            { loader: MiniCssExtractPlugin.loader },
                            loader.css,
                            loader.sass
                        ]
        
                    }
                ]
            }
        }
};