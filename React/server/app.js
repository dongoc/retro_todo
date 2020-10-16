const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('./sql/mysql');
// const mysql = require('mysql');

const app = express();

app.use(cors(), bodyParser.json());

app.get('/', (req, res) => {
  sql.selectAll((data) => {
    res.send(data);
  });
})

app.post('/', (req, res) => {
  sql.insertTodo(req.query.content);
  res.send('post completed!')
})

app.patch('/', (req, res) => {
  // TODO : sql.editTodo(id, content)
  res.send('edit completed')
})

app.delete('/' , (req, res) => {
  // TODO : sql.deleteTodo(id)
  res.send('delete completed')
})

app.delete('/reset' , (req, res) => {
  // TODO : sql.resetTodo()
  res.send('reset completed')
})

app.listen(8080, () => { 
  console.log('listening on port 8080')
});