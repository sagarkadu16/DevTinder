const express = require('express');

const app = express();

app.use('/fff', (req,res) => {
    res.send('Namaste Sagar adf !');
});

app.use('/hello', (req,res) => {
    res.send('Namaste Sagar adf !');
});




app.listen(7777, () => {
    console.log('Server created successfully.. !');
});