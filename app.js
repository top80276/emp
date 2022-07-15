const express = require('express');
const app = express();
// app.listen(8181);

// Establishing the port
const PORT = process.env.PORT ||8181;
app.listen(PORT, console.log(
    `Server started on port ${PORT}`));
  

var emprouter = require('./router/emprouter');
app.set('view engine','ejs');
app.use('/employee',emprouter);