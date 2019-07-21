const merge = require('webpack-merge');
const baseconfig =require('./webpack.base.config.js');

module.exports=merge(baseconfig,{
    mode:'production',
    
})