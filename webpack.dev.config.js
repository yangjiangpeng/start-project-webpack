const merge = require('webpack-merge');
const baseconfig =require('./webpack.base.config.js');

module.exports=merge(baseconfig,{
    mode:'development',
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        port:3000
    }
})
