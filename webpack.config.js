const path = require('path'); 
const htmlWebpackPlugin = require('html-webpack-plugin'); 
module.exports = { 
    mode: "development", 
    entry: { index: './src/js/index.js', }, 
    output: { filename: 'main.js', 
    path: path.resolve(__dirname, "dist"), clean: true, }, 
    devtool: "inline-source-map", 
    plugins: [ new htmlWebpackPlugin({ title: "Weather app", filename: "index.html", template: "src/pug/index.pug", }), ], 
    module: { 
        rules: [ 
            { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource', }, 
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource', }, 
            { test: /\.pug$/, use: { loader: "pug-loader", options: { pretty: true, }, }, }, 
            { test: /\.s[ac]ss$/i, use: [ "style-loader", "css-loader", "sass-loader" ], }, 
            { test: /\.js$/i, use: { loader: "babel-loader", options: { presets: ["@babel/preset-env"], } } }, 
        ], 
    }, 
    watchOptions: { ignored: /node_modules/, }, 
}
