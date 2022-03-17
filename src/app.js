const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send("hello world roshni!");
});
app.listen(5000);
