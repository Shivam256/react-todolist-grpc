import React, { useState, useEffect } from "react";
import "./App.css";

import { Todo, GetTodos, TodoID } from "./todo_pb";
import { Box, Button, TextField, Typography } from "@mui/material";
import { TodoServiceClient } from "./todo_grpc_web_pb";

export const client = new TodoServiceClient(
  "http://localhost:9090",
  null,
  null
);

const App = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const [allTodos, setAllTodos] = useState([]);

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    const ntodo = new Todo();
    ntodo
      .setId("id1")
      .setTitle(todo.title)
      .setDescription(todo.description)
      .setCompleted(0)
      .setCreatedon(new Date().toLocaleString());

    client.createTodo(ntodo, null, (err, response) => {
      console.log(response);
      let tds = response?.getTodosList() || [];
      console.log(tds, "hehehehehe");
      tds = tds.map((t) => ({
        id: t.array[0],
        title: t.array[1],
        description: t.array[2],
        createdOn: t.array[3],
      }));
      setAllTodos([...tds]);
      console.log(tds, "yo");
    });
    setTodo({
      title: "",
      description: "",
    });
  };

  const handleGetTodos = () => {
    client.getAllTodos(new GetTodos(), null, (err, response) => {
      console.log(response);
      let tds = response?.getTodosList() || [];
      console.log(tds, "hehehehehe");
      tds = tds.map((t) => ({
        id: t.array[0],
        title: t.array[1],
        description: t.array[2],
        createdOn: t.array[3],
      }));
      setAllTodos([...tds]);
      console.log(tds, "yo");
    });
  };

  const handleDelete = (id) => {
    const tid = new TodoID();
    tid.setId(id);
    client.deleteTodo(tid, null, (err, response) => {
      console.log(response);
      let tds = response?.getTodosList() || [];
      console.log(tds, "hehehehehe");
      tds = tds.map((t) => ({
        id: t.array[0],
        title: t.array[1],
        description: t.array[2],
        createdOn: t.array[3],
      }));
      setAllTodos([...tds]);
      console.log(tds, "yo");
    });
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  return (
    <div className="App">
      <Box
        sx={{
          width: "40vw",
          margin: "30px auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1>Todo list</h1>
        <TextField
          type="text"
          placeholder="title"
          name="title"
          value={todo.title}
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="description"
          name="description"
          value={todo.description}
          onChange={handleChange}
          multiline
          rows={3}
        />
        <Button
          onClick={handleCreate}
          sx={{
            backgroundColor: "#017691",
            color: "#fff",
            "&:hover": { backgroundColor: "#017691", color: "#fff" },
          }}
        >
          add todo
        </Button>
        <div>here are all the todos:</div>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {allTodos.length > 0
            ? allTodos.map((td, idx) => (
                <Box
                  sx={{
                    width: "100%",
                    padding: "5px",
                    border: "1px solid black",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>
                    {idx + 1}. {td.title} - {td.description}
                  </Typography>
                  <button
                    onClick={() => {
                      handleDelete(td.id);
                    }}
                  >
                    delete
                  </button>
                </Box>
              ))
            : null}
        </Box>
      </Box>
    </div>
  );
};

export default App;
