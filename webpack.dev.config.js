const path = require('path');
const merge = require('webpack-merge');
const baseconfig =require('./webpack.base.config.js');

module.exports=merge(baseconfig,{
    mode:'development',
    devtool:'inline-source-map',
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        port:3000,
        hot:true,
        historyApiFallback:true
        
    }
})
