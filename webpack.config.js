
module.exports = {
    entry: './src/app.js',           
    output: {                     
        path: './dist',            
        publicPath: __dirname + '/dist',
        filename: 'app-bundle.js'  
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015',  'stage-0'] 
                }
            }
        ]
    },

    jshint: {
        esversion: 6,
        failOnHint: false
    }
}