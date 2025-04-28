const express = require('express');

const app = express();

// advanced routing -- use regex, ?, +, (), *
// req.query -- query params
// req.params -- dynamic routes

app.get('/us*er', (req,res) => {
    res.send('success');
});

app.get('/user', (req,res) => {
    res.send({
        name: 'Sagar',
        surname: 'Kadu'
    })
});

app.post('/user', (req,res) => {
    // save data to database
    res.send('Data successfully saved to database!');
});

app.delete('/user', (req,res) => {
    res.send('User Deleted Successfully!');
});

app.use('/user', (req,res) => {
    res.send('Hijackeddd!')
});

app.listen(7777, () => {
    console.log('Server created successfully.. !');
});