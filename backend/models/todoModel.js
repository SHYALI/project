const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    completed:{
        type: Boolean,
    }
})

module.exports = mongoose.model('todos', todoSchema);