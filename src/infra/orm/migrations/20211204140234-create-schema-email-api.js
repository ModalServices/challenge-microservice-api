'use strict'

const { v4: uuidv4 } = require('uuid')
const config = {
  schema: 'email_api',
  tableName: 'tb_api_config',
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema(config.schema)

    await queryInterface.createTable(
      config.tableName,
      {
        uuid: {
          type: 'varchar(36)',
          primaryKey: true,
        },
        integration_key: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        schema: 'email_api',
      },
    )

    await queryInterface.bulkInsert(config, [
      {
        uuid: uuidv4(),
        integration_key: 'integration_key',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropSchema('email_api')
  },
}
