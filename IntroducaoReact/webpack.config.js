const path = require('path'); // Resolve os caminhos nos SOs

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // Arquivo de entrada
  output: { // Lugar onde o webpack vai jogar o bundle, ou seja, o codigo compilado
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // yarn add webpack-dev-server -D
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // yarn add babel-loader -D
        }
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // Serve para importar arquivos css
          { loader: 'css-loader' }, // Serve para importar arquivos de css dentro do css
        ]
      }, {
        test: /.*\.(gif|png|jpe?g)$/i, // i significa que é casesensitive
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};