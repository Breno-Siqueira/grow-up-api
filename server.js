const express = require('express');
const knex = require('knex');
const app = express();
const port = 3333;
// const database = require('./db');
const User = require('./User');

// const sequelize = require('./db');

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('banco-1', 'postgres', 'JM-]r2|F\`.*(f"Y', {
//   dialect: 'postgres',
//   host: '/cloudsql/35.247.220.167',
//   timestamps: false,
// });

const database2 = knex({
  client: 'pg',
  connection: {
    host: '35.247.220.167',
    user: 'postgres',
    password: 'JM-]r2|F\`.*(f"Y',
    database: 'banco-1'
  }
});

// console.log(database2());

// (async () => {
//   const database = require('./db');

//   try {
//     const resultado = await database.sync();
//     console.log(resultado);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// console.log(database)
// const teste = database2();
// console.log('second connection: ', teste);
// console.log(sequelize)


app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/teste', (req, res) => {
  res.send('teste de rota!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})