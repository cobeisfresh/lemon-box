const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry: 'index.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        path: __dirname + '/lib',
        publicPath: '/',
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        modules: [path.resolve(__dirname), 'node_modules'],
    },
    externals: {
        axios: 'axios'
    },
    plugins: [
        new CleanWebpackPlugin([
            path.resolve(__dirname, 'lib')
        ])
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            })
        ]
    }
}