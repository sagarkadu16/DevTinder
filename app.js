const express = require('express');

const app = express();

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