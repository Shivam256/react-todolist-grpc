//functions
import Todo from "../models/Todo.schema.js";

export const createTodo = async (call, callback) => {
  console.log("hehehehehehe");
  const todo = call.request;
  const { title, description, createdon } = call.request;


  console.log(call);
  const newTodo = await Todo.create({
    title,
    description,
    createdOn: createdon,
  });

  const todos = await Todo.find({});
  const newtodos = todos.map((t) => ({
    id: t._id,
    title: t.title,
    description: t.description,
    createdon: t.createdOn,
  }));

  
  callback(null, { todos: newtodos });
};

export const getAllTodos = async (call, callback) => {
  const todos = await Todo.find({});
  const newtodos = todos.map((t) => ({
    id: t._id,
    title: t.title,
    description: t.description,
    createdon: t.createdOn,
  }));

  callback(null, { todos: newtodos });
};

export const deleteTodo = async (call, callback) => {
  const { id } = call.request;
  await Todo.findByIdAndDelete(id);
  console.log(id, "to be deleted");
  const todos = await Todo.find({});

  const newtodos = todos.map((t) => ({
    id: t._id,
    title: t.title,
    description: t.description,
    createdon: t.createdOn,
  }));

  callback(null, { todos: newtodos });
};
