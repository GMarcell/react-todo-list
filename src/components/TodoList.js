import { List } from "@mui/material";
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        <List sx={{ m: 0, p: 0 }}>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo} />
            ))}
        </List>
    )
}

export default TodoList