const express = require('express');

const app = express();
const port = 3333;

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/teste', (req, res) => {
  res.send('teste de rota!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})