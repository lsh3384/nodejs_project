const express = require('express')

const app = express()

let port = 3030;
/* server listen */
const server = app.listen(port, function () {
  console.log("server on! http://localhost:" + port);
 });