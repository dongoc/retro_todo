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
  sql.insertTodo(req.body.content);
  res.send(`add new todo: ${req.body.content}`)
})

app.patch('/', (req, res) => {
  if (!req.body.progress) {
    sql.editTodo(req.body.id, req.body.content)
    res.send(`edit current todo: id=${req.body.id}, content=${req.body.content}`)
  } else {
    sql.changeProgressStatus(req.body.id, req.body.progress)
    res.send(`edit current todo: id=${req.body.id}, progress=${req.body.progress}`)
  }
})

app.delete('/:id' , (req, res) => {
  console.log(req.params.id)
  sql.deleteTodo(req.params.id)
  res.send(`delete current todo: id=${req.params.id}`);
})

// app.delete('/reset' , (req, res) => {
//   sql.resetTodo();
//   res.send('reset all todos')
// })

app.listen(8080, () => { 
  console.log('listening on port 8080')
});