const Path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/AddToHomeScreen.js',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: Path.join(__dirname, './build'),
        filename: 'AddToHomeScreen.js',
        library: 'add-to-homescreen-react',
        libraryTarget: 'umd'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: Path.resolve(__dirname, 'src'),
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                include: Path.resolve(__dirname, 'src'),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};
