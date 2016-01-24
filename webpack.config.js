var webpack = require('webpack');

module.exports = {
    //页面入口文件配置
    entry: {
        hello : './src/js/page/hello/index.js',
        property : './src/js/page/property/index.js',
        instruction : './src/js/page/instruction/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js/page',
        filename: '[name].js',
        publicPath: 'http://localhost:8080/dist/js/page'  // 指向静态资源，webpack-dev-server重要设置
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.css$/, loader: 'style!css!autoprefixer'},
            {test: /\.less$/, loader: 'style!css!autoprefixer!less'},
            // {test: /\.js$/, loader: 'jsx-loader?harmony' },
            {test: /\.json$/,   loader: 'json'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.woff$/, loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.ttf$/, loader: "file"},
            {test: /\.eot$/, loader: "file"},
            {test: /\.svg$/, loader: "file"}
        ]
    }
    // //其它解决方案配置
    // , resolve: {
    //     root: 'process.cwd() + '/src', process.cwd() + '/node_modules'',
    //     extensions: ['', '.js', '.json', '.scss'],
    //     alias: {
    //         AppStore : 'js/stores/AppStores.js',
    //         ActionType : 'js/actions/ActionType.js',
    //         AppAction : 'js/actions/AppAction.js'
    //     }
    // }
};