const Sequelize = require('sequelize');

// const config = {
//   username: 'postgres',
//   password: 'root',
//   database: 'postgres',
//   host: 'localhost',
//   post: '5432',
//   dialect: 'postgres',
// }

// const sequelize = new Sequelize(config);

const sequelize = new Sequelize('banco-1', 'postgres', '5xxu7<XmIc3+<s$Z', {
  dialect: 'postgres',
  host: '35.247.220.167',
  timestamps: true,
});

module.exports = sequelize;


