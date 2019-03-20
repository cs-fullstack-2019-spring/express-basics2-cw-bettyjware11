const express = require('express');
var router = express.Router();
let member = require('../memberModule.js');

//define the signIn route
router.get('/signIn', (request, response)=>{
    response.send("Please sign in with your Member credentials!");
});

//define the contact route
router.get('/contact/:name/:number', (request, response)=>{
    response.send(`Thanks ${request.params.name} We will contact you shortly at ${request.params.number}`);
});



module.exports = router;