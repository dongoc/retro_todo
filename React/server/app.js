const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(cors(), bodyParser.json());

app.get('/', (req, res) => {
  res.send('Alright!')
})

app.listen(3000, () => { 
  console.log('listening on port 8080')
});