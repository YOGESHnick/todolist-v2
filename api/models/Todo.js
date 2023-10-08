const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ToDoSchema = new Schema({
    text:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:String,
        required:Date.now()
    }
})

const ToDo = mongoose.model("Todo",ToDoSchema );
module.exports=ToDo