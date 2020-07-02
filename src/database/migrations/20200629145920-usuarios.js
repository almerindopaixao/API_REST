module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tabela = await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    return tabela;
  },

  down: async (queryInterface) => {
    const dropTable = await queryInterface.dropTable('usuarios');
    return dropTable;
  },
};

// npx sequelize db:migrate
// npx sequelize db:migrate:undo => Para desfazer a migração
