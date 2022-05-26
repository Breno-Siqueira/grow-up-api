const Sequelize = require('sequelize');
const database = require('./db');
const uuid = require('uuid');

const User = database.define('user', {
  id: {
    type: Sequelize.UUIDV4,
    autoIncrement: true,
    allowNull: false,
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
})

module.exports = User;

// Código, Nome Cliente, telefone do cliente e email.