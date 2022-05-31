const Sequelize = require('sequelize');
const database = require('./db');
const uuid = require('uuid');

const User = database.define('users', {
  id: {
    type: Sequelize.STRING,
    allowNull: true,
    primaryKey: true,
    default: uuid.v4()
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING
  },
  descricao: Sequelize.STRING,
  email: Sequelize.STRING
},
  {
    freezeTableName: true,
    tableName: "users"
  }
)

module.exports = User;

// Código, Nome Cliente, telefone do cliente e email.