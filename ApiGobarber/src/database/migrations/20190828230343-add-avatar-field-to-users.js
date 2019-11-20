module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // nome da tabela que sera adicionado a coluna
      'avatar_id', // nome da coluna
      {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' }, // Chave estrangeira, referenciar a tabela file com a chave da columna id
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
