const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const libraryName = 'date-picker';
let outputFile = libraryName + '.js';
const env = require('yargs').argv.env;
let plugins = [];

if(env === 'minified') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + '.min.js';
}

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist/',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                loaders: ['babel-loader'],
                exclude: /(node_modules|bower_components)/
            },
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.js'],
    },
    plugins: plugins
}