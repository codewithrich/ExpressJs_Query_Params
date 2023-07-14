const express = require('express');
const app = express();

app.get('/' , function(req ,res) {
    res.send('index.html in vs')
})

app.get('/second' , function(req ,res) {
    res.send('index.html in code')
})

app.get('/second/:id' , function(req ,res) {
    const numb= req.params.id
    res.send('index.html in vs code' + numb)
})

app.get('/secondy' , function (req,res) {
    const id = req.query.id
    res.send("This is your Query number" + id);
})


app.listen(49151, function (req,res) {
    console.log("Your port no:49151 is running babe");
});
