const express = require('express');
const knex = require('knex');
const app = express();
const port = 8080;
const database = require('./db');
const User = require('./User'); 3
const uuid = require('uuid');
const cors = require('cors')

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
app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  next();
});

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const connectDb = async () => {
  try {
    await database.authenticate();
    const resultado = await database.sync();
    console.log('Connection has been established successfully.');
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

app.get('/user/:id', async (req, res) => {
  try {

    const { id } = req.params;

    const user = await User.findByPk(id);
    console.log(user);

    res.status(200).json({ user: user })
  } catch (error) {
    console.log(error);
  }
});

app.put('/user/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const { userEdited } = req.body;
    // const userteste = await User.findByPk(id);
    console.log(userEdited)
    const user = await User.update(userEdited, { where: { id: id } });
    // userteste.update(userEdited);

    if (user && user[0])
      res.status(200).json({ message: 'User updated', newUser: user })
    else
      res.status(400).json({ message: 'Erro ao atualizar' })
  } catch (error) {
    console.log(error);
  }
});

app.delete('/user/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const user = await User.findByPk(id);
    let result;
    if (user) {
      result = await user.destroy()
      console.log(result)
      res.status(200).json({ message: 'Usuário deletado' });

    }
    else
      res.status(404).json({ message: 'Usuário não encontrado' })
    console.log(response);

    // if (user && user[0])
    //   res.status(200).json({ message: 'User updated', newUser: user })
    // else
    //   res.status(400).json({ message: 'Erro ao atualizar' })
  } catch (error) {
    console.log(error);
  }
});

app.get('/users', async (req, res) => {
  try {
    const userList = await User.findAll();
    console.log(userList);
    res.status(200).send(userList);
  } catch (error) {
    console.log(error);
  }
});

app.get('/teste', (req, res) => {
  res.send('teste de rota!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})