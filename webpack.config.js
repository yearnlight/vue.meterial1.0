const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin") //html容纳js
const isDev = process.env.NODE_ENV === "development"
const config = {
    target:"web",
    entry:path.join(__dirname,'src/index.js'),//入口文件
    output:{
        filename:'bundle.js',//输出文件
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    }
                ]
            },
            {
              test:/\.styl$/,
              use:[
                  'style-loader',
                  'css-loader',
                  {
                      loader:'postcss-loader',
                      options:{
                          sourceMap:true
                      }
                  },
                  'stylus-loader'
              ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg|svg|jpeg|gig|ico)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            // limit:1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            },
            { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot$/,  loader: "file-loader" },
        ]
    },
    plugins:[
        new webpack.DefinePlugin(
            {
                'process.env':{
                    NODE_ENV:isDev?"'development'":"'production'"
                }
            }
        ),
        new HTMLPlugin(
            {
                title:"Sky Cloud",
                favicon:path.join(__dirname,'src/asset/favicon.ico')
            }
        )
    ]
}

if(isDev){
    config.devtool = '#cheap-module-eval-source-map' //源码映射
    config.devServer = {
        port: 8000, //监听8000端口
        host:'localhost',
        overlay:{//编译过程中出现错误显示在网页
            errors:true //错误打印到页面
        },
        open:true,//自动启动浏览器
        hot:true, //热替换
        inline:true,//热加载
        watchOptions: {
            aggregateTimeout: 100,
            poll: 1000
        },
        stats: {
            colors: true,
        }
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),//启动hot
        new webpack.NodeEnvironmentPlugin()//优化 hot
    )
}

module.exports = config
