let libraryName = 'date-picker';
let outputFile = libraryName + '.js';
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
    }
}