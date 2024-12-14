const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hotels');

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("MongoDB server connected........");
})

db.on('error',()=>{

})