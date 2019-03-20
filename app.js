const express = require('express');
const app = express();

let memberModule = require('./routes/routes.js');

//mounting at member...
app.use('/member', memberModule);

app.listen(8000,()=> {
    console.log("App listening on port 8000!")
});
