const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ToDo = require('./models/Todo');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(() => console.log("Connected Successfully !"))
    .catch(error => console.log(error));

app.listen(3001, ()=>console.log("Server Started !"));