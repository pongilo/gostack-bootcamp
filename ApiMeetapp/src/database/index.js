import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  // Metodo que faz a conexão com o banco de dados e carrega os models
  init() {
    // Na variavel this.connection ja tem a conexao com o base de dados
    // E essa variavel é a que esta sendo esperado dentro dos models dentro do metodo init
    this.connection = new Sequelize(databaseConfig);

    // Percorre o array com os models e passa o this.connection para os models criados
    models.map(model => model.init(this.connection));
  }
}

// Precisa chamar esse arquivo database no app.js

export default new Database();
