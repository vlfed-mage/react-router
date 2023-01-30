const webpack = require('webpack');
const routes = require('./configs/routes');

module.exports = {
    devServer: {
        contentBase: routes.build,
        compress: true,
        hot: true,
        open: true,
        proxy: {
            '/api': 'http://localhost:5000',
        },
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: true,
            errors: true,
            errorDetails: false,
            warnings: false,
            publicPath: false,
            overlay: true,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ]
}
