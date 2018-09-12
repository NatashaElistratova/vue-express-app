const express = require('express');
const router = express.Router();
const Article = require('../models/article');

router.get('', function(req, res, next) {
    Article.find({})
        .then(articles =>{
            res.send(articles);
        })
});

router.post('', function(req, res, next) {
    Article.create(req.body)
        .then(article=>{
            res.send(article);
        }).catch(next);

});

router.put('/:id', function(req, res, next) {
    Article.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
           return Article.findOne({_id: req.params.id});
        })
        .then(article => {
            res.send(article);
        })


});

router.delete('/:id', function(req, res, next) {
    Article.findByIdAndRemove({_id: req.params.id})
        .then(article => {
            res.send(article);
        });
});


module.exports = router;