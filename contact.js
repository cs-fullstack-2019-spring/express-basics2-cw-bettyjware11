const express = require('express');
const router = express.Router();

router.get('/:contact', (request, response)=>{
    response.send(`Thanks ${res.params.member}  We will contact you shortly at ${res.params.member}`);
});







module.exports = router;