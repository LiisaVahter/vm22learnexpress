const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

app.use(express.urlencoded( {extended:true}));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
  res.render('index.njk');
//   console.log('somebody visited');
});

app.get('/page2', (req, res) => {
    res.render('page2.njk');
  //   console.log('somebody visited');
  });

  app.get('/form', (req, res) => {
    console.log(req.query);
    res.render('form.njk', req.query);
  //   console.log('somebody visited');
  });

  app.get('/circle', (req, res) => {
    console.log(req.query);
    res.render('circle.njk', req.query);
  //   console.log('somebody visited');
  });

  app.post('/circle', (req, res) => {
     res.json(req.body)
  });

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});