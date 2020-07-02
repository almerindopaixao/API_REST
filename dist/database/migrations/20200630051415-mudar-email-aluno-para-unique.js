"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    const change = await queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
    return change;
  },

  down: async () => {},
};
