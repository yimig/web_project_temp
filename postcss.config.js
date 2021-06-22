const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')


module.exports = {
    // Add you postcss configuration here
    // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
    plugins: [
        ['tailwindcss'],
        ['autoprefixer'],
        // cssnano({
        //     preset:'default'
        // }),
        // purgecss({
        //     content:['./layouts/**/*.html', './src/**/*.vue', './src/**/*.jsx','./*.html'],
        //     safelist:[/^el-/],
        // }),
    ]
};
