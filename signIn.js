const express = require('express');
const router = express.Router();


router.get('/signIn', (request, response)=>{
    response.send("Please sign in with your Member credentials");
});
