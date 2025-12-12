const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

const secret = fs.readFileSync('/run/secrets/api_key', 'utf8');

app.get('/', (req, res) => {
  res.send(`Secret chargé correctement : ${secret}`);
});

app.listen(port, () => {
  console.log(`API lancée sur le port ${port}`);
});
