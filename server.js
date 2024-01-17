const express = require('nunjucks');
const nunjucks = require('express');
const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
  res.render(__dirname + '/index.html');
//   console.log('somebody visited');
});

app.get('/page2', (req, res) => {
    res.render(__dirname + '/page2.html');
  //   console.log('somebody visited');
  });


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});