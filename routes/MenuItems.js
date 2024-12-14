const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/Menu');



router.post('/',async(req, res)=>{

    const data = req.body;

    const NewItems = new MenuItem(data);

    const response=await NewItems.save();
    console.log("data saved successfully...");
    res.status(200).json(response)
})

router.get('/',async(req, res)=>{
    const items =await MenuItem.find();

    console.log("data fetch");
    res.json(items);
})

module.exports = router;