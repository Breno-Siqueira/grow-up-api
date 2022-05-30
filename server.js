const express = require('express');
const knex = require('knex');
const app = express();
const port = 8080;
// const database = require('./db');
// const User = require('./User');

// const sequelize = require('./db');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('zippy-catwalk-347723:southamerica-east1:banco-1', 'postgres', '5xxu7<XmIc3+<s$Z', {
  dialect: 'postgres',
  host: '35.247.220.167',
  timestamps: false,
});



const connectDb = async ()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectDb();
// const database2 = knex({
//   client: 'pg',
//   connection: {
//     host: '35.247.220.167',
//     user: 'postgres',
//     password: 'JM-]r2|F\`.*(f"Y',
//     database: 'banco-1'
//   }
// });

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