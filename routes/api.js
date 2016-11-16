var express = require('express');
var router = express.Router();
var SQLquery = require('../mysql/mysql-query');

router.get('/users', function (req, res) {
    SQLquery.getUserAccount(function (err, data) {
        if (err) throw err;
        else
            res.status(200).send(data);
    });
});




/* Begin article query */
router.get('/articles', function (req, res) {
    SQLquery.getArticle(function (err, data) {
        if (err) return;
        else
            res.status(200).send(data);
    });
});

router.get('/articles/:category', function (req, res) {
    let category = req.params.category;
    SQLquery.getArticleInCategory(category, function (err, data) {
        if (err) return err;
        else
            res.status(200).send(data);
    });
});

router.get('/articles/:category/:keyword', function (req, res) {
    let category = req.params.category;
    let keyword = req.param(keyword);
    if (keyword) {
        console.log(keyword);
    } else {
        console.log(category);
    }
})


router.get('/category', function (req, res) {
    SQLquery.getCategoryList(function (err, data) {
        if (err) return;
        else
            res.status(200).send(data);
    })
});
router.get('/taglist',function(req,res){
    SQLquery.getTagList(function(err,data){
        if(err) return;
        else
            res.status(200).send(data);
    });
});

router.get('/apisource', function (req, res) {
    SQLquery.getAPISource(function (err, data) {
        if (err) return;
        else
            res.status(200).send(data);
    })
});

module.exports = router;