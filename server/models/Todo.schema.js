import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title:{
    type:String
  },
  description:{
    type:String,
  },
  completed:{
    type:Boolean
  },
  createdOn:{
    type:String
  }
});

const Todo = mongoose.model("TODO", TodoSchema);


export default Todo;