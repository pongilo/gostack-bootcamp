module.exports = {
  presets: [
    "@babel/preset-env", // Converte as funcionalidade do js que o navegador não entende.
    "@babel/preset-react" // Converte as funcionalidade do react que o navegador não entende.
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}