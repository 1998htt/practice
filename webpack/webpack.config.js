const path = require('path'); //webpack自带path模块 引入一个模块
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
module.exports = {
    productionSourceMap: process.env.NODE_ENV === "production" ? false : true,//设置显不显示map文件
    mode:"development",
    entry:{//入口文件的配置
        'index': "./src/index.js",
        'index2':"./src/index2.js"
    },
    output:{//出口文件的配置
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',//输出的文件名
        publicPath:'http://127.0.0.1:8080/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/i,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:500,
                            outputPath:"images/"
                        }
                    }
                ]
            },
            {
                test:/\.(html|htm)$/i,
                loader:'html-withimg-loader'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            chunks:['index'],
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     filename:'index2.html',
        //     chunks:['index2'],
        //     minify:{
        //         removeAttributeQuotes:true
        //     },
        //     hash:true,
        //     template:'./src/index2.html'
        // }),
        new ExtractTextWebpackPlugin("./css/style.css")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8080',
        compress:true,
        hot:true,
        open:true
    }
}