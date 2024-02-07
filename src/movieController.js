const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/' , (req,res) => {
    //fs.appendFileSync('test.txt', 'hello');
    let text = fs.readFileSync('test.txt', 'utf-8');
    let movies = text.split('\n');
    movies.splice(-1);
    res.render('movies/index.njk', {movies: movies});

});


router.get('/add' , (req,res) => {
    res.render('movies/add.njk');

});

router.post('/add' , (req,res) => {
   fs.appendFileSync('test.txt', req.body.movie + '\n');
   res.redirect('/movies/');

});





module.exports = router;