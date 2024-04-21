const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://shyalinarayan2002:shyali12345@cluster0.b9lplqi.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}