import grpc from "grpc";
import protoLoader from "@grpc/proto-loader";
import "dotenv/config";

import "./db/conn.js";

import {
  createTodo,
  getAllTodos,
  deleteTodo,
} from "./controllers/todo.controller.js";

const PROTO_PATH = "todo.proto";

const packageDefination = protoLoader.loadSync(PROTO_PATH);
const protoDescriptor = grpc.loadPackageDefinition(packageDefination);

const server = new grpc.Server();

server.addService(protoDescriptor.TodoService.service, {
  createTodo,
  getAllTodos,
  deleteTodo,
});

server.bind(process.env.SERVER_URI, grpc.ServerCredentials.createInsecure());

server.start();
console.log("server is running!");
