const express = require('express');
const knex = require('knex');
const app = express();
const port = 8080;
const database = require('./db');
const User = require('./User'); 3
const uuid = require('uuid');

// const sequelize = require('./db');

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('postgres', 'postgres', '5xxu7<XmIc3+<s$Z', {
//   dialect: 'postgres',
//   host: '35.247.220.167',
//   timestamps: false,
// });

// const config = {
//   username: 'postgres',
//   password: 'root',
//   database: 'postgres',
//   host: 'localhost',
//   post: '5432',
//   dialect: 'postgres',
// }

// const sequelize = new Sequelize(config);



const connectDb = async () => {
  try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
    const resultado = await database.sync({ force: true });
    console.log('Sincronização: ', resultado);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectDb();


app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.post('/user', async (req, res) => {
  try {

    const { nome, telefone, descricao, email } = req.body;
    const newUser = await User.create({
      id: uuid.v4(),
      nome: nome,
      telefone: telefone,
      descricao: descricao,
      email: email,
    })
    console.log(newUser);
    res.status(200).json({ message: 'User created', newUser: newUser })
  } catch (error) {
    console.log(error);
  }
});

app.get('/users', async (req, res) => {
  try {
    const userList = await User.findAll();
    console.log(userList);
    res.send(userList);
  } catch (error) {
    console.log(error);
  }

  // res.statusCode(200).json({ userList: userList })
});

app.get('/teste', (req, res) => {
  res.send('teste de rota!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})