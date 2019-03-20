const express = require('express');
var router = express.Router();

//define the home page route
router.get('/', (request, response)=>{
    response.send("Welcome to the Member Only Page!");
});

//define the contact route
//router.get('/:member', (request, response)=>{
//    response.send(`Thanks ${res.params.memberModule} We will contact you shortly at ${res.params.memberModule}!!` );
//});



module.exports = router;