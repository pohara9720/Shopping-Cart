const path = require('path')

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true } },
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        exclude: path.resolve(__dirname, './src/static/'),
                        use: 'svg-inline-loader'
                    },
                    {
                        include: path.resolve(__dirname, './src/static/'),
                        use: 'file-loader'
                    },
                ],
            }
        ],
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
    },

    devtool: 'nosources-source-map',
}
