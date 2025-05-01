const express = require('express');
const { adminAuth, userAuth } = require('./Middlewares/auth');

const app = express();



// advanced routing -- use regex, ?, +, (), *
// req.query -- query params
// req.params -- dynamic routes

// 500: comes when something breaks

app.use('/admin', adminAuth);

app.post('/user', userAuth, (req,res,next) => {
    res.send('user data')
});

app.get('/admin/getAllData', (req,res,next) => {
    res.send('All User Data');
});

app.get('/admin/deleteUser', (req,res,next) => {
    res.send('User Deleted');
});

app.listen(7777, () => {
    console.log('Server created successfully.. !');
});