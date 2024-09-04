const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect(`mongodb+srv://ankur7:vJ8Oo1aiYpppkTPW@cluster0.bmtrf.mongodb.net/todos`);


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports={
    todo:todo
}
