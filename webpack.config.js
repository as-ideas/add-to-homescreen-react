const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/AddToHomeScreen.js',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'AddToHomeScreen.js',
        library: 'add-to-homescreen-react',
        libraryTarget: 'umd'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                include: path.resolve(__dirname, 'src'),
                loader: "url-loader",
                options: {
                    limit: Infinity
                }
            }

        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            context: 'src/images',
            from: '**/*',
            to: path.resolve(__dirname, 'build/images')
        }])
    ]
};
