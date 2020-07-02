const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('usuarios',
      [
        {
          nome: 'Almerindao',
          email: 'almerindopaixao@live.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Almerindao2',
          email: 'almerindo2paixao@live.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Almerindao3',
          email: 'almerindo3paixao@live.com',
          password_hash: await bcryptjs.hash('4875689', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {});
  },

  down: async () => {},
};

// npx sequelize seed:generate --name criar-usuarios => para criar o seed
// npx sequelize db:seed:all => para mandar para a base de dados
