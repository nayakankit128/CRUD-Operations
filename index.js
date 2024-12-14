const express = require("express");

const app = express();
const db = require('./db')
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const PersonRouter = require('./routes/PersonRoutes');
const MenuItemRouter = require('./routes/MenuItems');

app.use('/person',PersonRouter);
app.use('/menu',MenuItemRouter);




app.listen(4001, ()=>{
    console.log("Server is started on port no. 4001....")
})