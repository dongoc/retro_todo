const mysql = require('mysql');
// QUESTION : sql 파일을 import 해오는 형식은 어떻게 하는걸까?
// const selectAll = require('../sql/selectAll.sql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'p@ssw0rd',
  database: 'retro_todo'
});

const selectAll = (callback) => {
  const q = `SELECT * FROM todos ORDER BY id DESC`;
  connection.query(q, (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

const insertTodo = (content) => {
  const todo = { content };
  const q = `INSERT INTO todos SET ?`;
  connection.query(q, todo, (err, results) => {
    if (err) throw err;
  })
}

const editTodo = (id, content) => {
  const q = `UPDATE todos SET content='${content}' WHERE id=${id}`;
  connection.query(q, (err, results) => {
    if (err) throw err;
    console.log('edit', results)
  })
}

const changeProgressStatus = (id, progress) => {
  const q = `UPDATE todos SET progress='${progress}' WHERE id=${id}`;
  connection.query(q, (err, results) => {
    if (err) throw err;
    console.log('edit', results)
  })
}

const deleteTodo = (id) => {
  const q = `DELETE FROM todos WHERE id=${id}`;
  connection.query(q, (err, results) => {
    if (err) throw err;
    console.log('delete', results)
  })
}

const resetTodo = (callback) => {
  const q = `DELETE FROM todos`;
  connection.query(q, (err, results) => {
    if (err) throw err;
    console.log('reset', results)
  })
}

module.exports = {
  selectAll,
  insertTodo,
  editTodo,
  changeProgressStatus,
  deleteTodo,
  resetTodo
}
// const q = 'INSERT INTO todos(content) VALUES ?';
// const contents = [['Refactoring DOM to React'], ['Pair programming with Database']]
// connection.query(q, [contents], (err, results) => {
//   if (err) throw err;
//   console.log(results);
// })