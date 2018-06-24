const express = require('express');
const restify = require('express-restify-mongoose');
const {Dish,Category} = require('../../../models');

const router = express.Router(); // eslint-disable-line new-cap

  const postRead =   (req, res, next) => {
    console.log('post read')
    let result = []
    
     Dish.find().exec(function(err, dishes) {
        let final = dishes.map( (dish)=>{
            console.log(dish.category)
            result.push(getResultObject(dish))
            return result   
        })
        console.log(final)
        res.json(final)
        
      });

    
  }


const   getResultObject = (dish)=> {
       Category.findById(dish.category).exec(  function(err, category) {
        return{
            _id : dish._id ,
            name : dish.name,
            price : dish.price,
            _category : category,
            category: dish.category,
            createdAt : dish.createdAt
        }
     
        
      });
}  
restify.serve(router, Dish,{lean: false});


router.get('/api/v1/Dishes/:id', (req, res) =>{
    id = req.params.id
    result = []
    Dish.find({category_id : id}).exec(  function(err, dishes) {
        console.log(dishes)
        res.json(dishes)
        
      });

}  


);
module.exports = router;