module.exports = {
    devtool: 'source-map',
    module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties",
                    ["@babel/plugin-transform-runtime",
                      {
                        "regenerator": true
                      }
                    ]
            ]
        }
    }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
    }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};