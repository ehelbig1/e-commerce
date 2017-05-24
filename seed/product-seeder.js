var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: "https://thumb1.shutterstock.com/display_pic_with_logo/60694/365696426/stock-photo-bowl-of-cereal-with-spoon-isolated-on-white-overhead-view-365696426.jpg",
        title: 'Bowl of Cereal',
        description: 'The most delicious Bowl of cereal in the world! Only one left in stock, you better hurry!',
        price: 1000
    }),
    new Product({
        imagePath: "https://images.pexels.com/photos/2424/food-restaurant-summer-nuts.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: 'Ice Cream Cone',
        description: 'The most delicious Cone of Ice Cream in the world! Only one left in stock, you better hurry!',
        price: 5000
    }),
    new Product({
        imagePath: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        title: 'Slice of Cake',
        description: 'The most delicious Slice of Cake in the world! Only one left in stock, you better hurry!',
        price: 10000
    })
];

var done = 0;
for(let i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}