const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/', async (req, res)=>{

    try{
        const data = req.body;
    const newPerson = new Person(data);
    const response =await newPerson.save();
    console.log("Data Saved....");
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
        }
})


router.get('/', async (req,res)=>{
   
    try{
         const person = await Person.find();
         console.log("data fetch")
         res.status(200).json(person)
    }catch(err){
        console.log(err);
        res.status(500).json();
    }
})


router.get('/:workType',async(req, res)=>{
    try{

        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
            const response = await Person.find({work:workType});
            console.log("Data successfullt fetch....");
            res.status(200).json(response);
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

router.put('/:id',async (req, res)=>{
    try{

        const personId = req.params.id;
    const updatePerson = req.body;

    const response =await Person.findByIdAndUpdate(personId,updatePerson, {
        new:true,
        runValidators:true,
    })

    if(!response){
        return res.status(404).json({error:'Person not found'});
    }


    console.log("Data Updated");
    res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server'});
    }
})


router.delete('/:id',async(req, res)=>{
     try{
        const PersonId = req.params.id;

     const update = await Person.findByIdAndDelete(PersonId);
     if(!update){
        return res.status(404).json({error:'person id are not matching'});
     } 

     console.log("Delete successfully");
     }catch(err){
        console.log(err);
        res.status(500).json('Inter server error : ');
     }

})
module.exports = router;