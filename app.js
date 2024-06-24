const express = require('express');
const app = express();
const userrouter = require('./routes/routes')
require("dotenv").config()
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.get('/', userrouter)
app.listen(process.env.PORT, () => {
  console.log(`starting server on port ${process.env.PORT}`);
});