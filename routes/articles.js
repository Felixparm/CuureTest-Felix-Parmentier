var express = require('express');
var router = express.Router();
var articleModel = require('../models/articles');




// Création d'un article , route utilisée dans SellScreen

router.post('/create-article', async function(req, res, next) {
  console.log("hello1 req query --------------create article",req.body)

    let newArticle = new articleModel({
        title:req.body.title,
        description:req.body.description,
        brand:req.body.brand,
        kidsAge:req.body.kidsAge,
        price:req.body.price,
        category:req.body.category,
        subcategory:req.body.subcategory,
        state:req.body.state,
        images:req.body.url,
        sellerToken:req.body.sellerToken,
        creationDate:new Date(),
        isVisible:true
      })
    
    let result = false;
    saveArticle = await newArticle.save()

    if(saveArticle){
    result = true
    }
      res.json({result,saveArticle})
});


router.get('/get-all-articles', async function(req, res, next) {
    let products = await articleModel.find({isVisible:true}).sort({creationDate:-1})
    console.log(products)
    res.json({products});
});

module.exports = router; 
