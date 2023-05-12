const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/student', {useNewUrlParser: true })
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))


app.use(express.urlencoded({ extended: true}))
app.use(express.json())


app.use(function (req,res,next)
{
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

app.listen(3200, ()=> console.log("Server started on 3200"))

const studentController  = require('./Controller/studentController');
  
app.post('/api/student/create', studentController.create)
app.put('/api/student/update', studentController.update)
app.get('/api/student/retrieve', studentController.retrieve)
app.delete('/api/student/delete', studentController.delete)

