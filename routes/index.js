var express = require('express');
var router = express.Router();
var SQLquery = require('./mysql-query');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  SQLquery.getArticle();
});

module.exports = router;
