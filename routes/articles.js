var express = require('express');
var router = express.Router();
var articleModel = require('../models/articles');
var orderModel = require('../models/orders');



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

// Récupération des articles encore en vente (c'est à dire isVisible==true) , route utilisée dans l'écran d'Accueil
router.get('/get-all-articles', async function(req, res, next) {


    let products = await articleModel.find({isVisible:true}).sort({creationDate:-1})
    // console.log(products)
    console.log(products)
    res.json({products});
  
});

// Récupération des articles encore en vente (c'est à dire isVisible==true) et repondant à la souscatégorie sélectionnée (subcat) par l'utilisateur , 
// route utilisée dans l'écran d'Accueil

router.get('/filter-articles', async function(req, res, next) {
  console.log(req.query.subcat)
  let products = await articleModel.find({subcategory:req.query.subcat,isVisible:true}).sort({creationDate:-1})
  console.log(products)
  res.json({products})
  
}); 

// Récupération des articles vendus par un utilisateur donné

router.get('/get-article-by-seller', async function(req, res, next) {

  console.log(req.query)
  let products = await articleModel.find({sellerToken:req.query.SellerToken}).sort({creationDate:-1}) 
  console.log('product by seller-----------------',products)
  res.json({products});

});

// Récupération des article acheté par un utilisateur donné

router.get('/get-article-by-buyer', async function(req, res, next) {

console.log('route get article by buyer',req.query)
 
var order = await orderModel.find({clientId:req.query.buyerToken});

console.log(order);

var articlesTab=[];
var articlesTabValidate=[];
for (var i=0;i<order.length;i++){ 
if(order[i].orderState=='En cours'){ 
var articles= await articleModel.findOne({_id:order[i].articleId})
articlesTab.push(articles);
 } else {
var articles= await articleModel.findOne({_id:order[i].articleId})
articlesTabValidate.push(articles);
 } 
}

console.log(articlesTab);
console.log(articlesTabValidate);
  
res.json({articlesTab,articlesTabValidate});
});




module.exports = router; 
