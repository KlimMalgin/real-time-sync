const path              = require('path');
const os                = require('os');
const glob              = require('glob');
const webpack           = require('webpack');
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');

var options = {};


module.exports = {
    entry : {
        client : path.resolve( __dirname, 'app/client.js' ),
    },
    output : {
        path       : path.resolve( __dirname, './dist/' ),
        publicPath : '/dist/',
        filename   : '[name].js',
    },
    module : { rules : [
        {
            test    : /\.js$/,
            loader  : 'babel-loader',
            exclude : /node_modules/,
        },
    ] },
    resolve : {
        unsafeCache : true,
        modules     : [
            path.resolve('./node_modules'),
        ],
    },
    performance : { hints: false },
    devtool     : '#eval-source-map',
};

if ( process.env.NODE_ENV === 'production' ) {
    options.devtool = '#source-map';

  // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = ( module.exports.plugins || [] ).concat( [
        new webpack.DefinePlugin( { 'process.env' : {
            NODE_ENV : `"${process.env.NODE_ENV}"`,
            IS_CLIENT: `"${process.env.IS_CLIENT}"`,
        } } ),
        new webpack.optimize.UglifyJsPlugin( { sourceMap: options.devtool && options.devtool.indexOf('source-map') >= 0 } ),
    ] );
} else {
    module.exports.plugins = ( module.exports.plugins || [] ).concat( [
        new webpack.DefinePlugin( { 'process.env' : {
            NODE_ENV : `"${process.env.NODE_ENV}"`,
            IS_CLIENT: `"${process.env.IS_CLIENT}"`,
        } } ),
    ] );
}
