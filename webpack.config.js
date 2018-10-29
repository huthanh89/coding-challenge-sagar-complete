//-----------------------------------------------------------------------------//

module.exports = {

    entry: './src/js/index.js',

    performance: {
        hints: false
    },

    output: {
        filename: 'bundle.js'
    },

    // Resolve directories to look at when importing modules.

    resolve: {
        modules: [
            'node_modules',
            './src/js'
        ]
    },

    // Configure webpack modules to be able to read pug, babel, css etc,
    // By providing the proper module loader.

    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/react']
                }
            }
        ]
    }
};

//-----------------------------------------------------------------------------//