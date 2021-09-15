const express = require('express');
const mysql = require('mysql');


//Create Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'test',

})

//Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
})


const app = express();

app.listen('5000', ()=>{
    console.log('Server started on port 5000');
})