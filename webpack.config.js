// для запуска в терминале:
//npx webpack --config webpack.config.js


const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    }

};