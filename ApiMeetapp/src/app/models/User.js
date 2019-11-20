import { Model, Sequelize } from 'sequelize';

import bcrypt from 'bcryptjs';
import { async } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/scheduler/async';

class User extends Model {
  // Metodos chamado automaticamente pelo sequelize
  // Parametro sequelize é a que recebe a varival de conexão da database/index.js
  static init(sequelize) {
    // Chama o methodo init da classe model
    super.init(
      {
        name: Sequelize.STRING, // Definir apenas o tipo
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // o tipo virtual mostra que o campo nunca existirá na base de dados
        password_hash: Sequelize.STRING,
      },
      {
        sequelize, // pode ser passado varias configurações
      }
    );
    // Os hook são trechos de códigos do sequelize que são executados de forma automaticas baseado em ações que acontecem no model
    // O codigo sera executado antes de qualquer save, seja de criação o edição
    this.addHook('beforeSave', async user => {
      if (user.password) {
        // O número significa a força da criptografia, um numero muito grande pode pesar a aplicação
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this; // Retorna o model que foi inicializado aqui dentro
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
