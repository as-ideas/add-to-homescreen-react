const Path = require('path');

module.exports = {
    entry: './src/AddToHomeScreen.js',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: Path.join(__dirname, './build'),
        filename: 'AddToHomeScreen.js'
    },
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
