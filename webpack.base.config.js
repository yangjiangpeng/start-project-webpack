const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports ={
    entry:path.join(__dirname,'./src/app.js'),
    output:{
        filename:'[name].[hash:4].js',
        path:path.join(__dirname,'./dist'),
    },
    module:{
        rules:[
            {
               test:/\.less$/,
               use:['style-loader','css-loader','less-loader'],
               exclude: /(node_modules|bower_components)/,

            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env',"@babel/preset-react"],
                    plugins: ['@babel/plugin-transform-runtime']
                  }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve:{
        extensions:['.js','.jsx','.less','.json'],
        modules:[path.resolve(__dirname,'node_modules')]
    }
}