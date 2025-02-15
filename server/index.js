require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
// const { Tasks } = require('./db');

const port = 3000;
const distPath = path.resolve(__dirname, '../client/dist');
// eslint-disable-next-line no-console
console.log(distPath);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));

app.use(session({
  secret: proccess.env.SECRET,
  resave: false,
  saveUninitialized: false,
}))
// app.get();

// app.post();

// app.put();

// app.delete();

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`
  Listening at: http://127.0.0.1:${port}
  `);
});
