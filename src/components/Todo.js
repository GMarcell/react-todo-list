import React from "react";
import Typography from '@mui/material/Typography';
import { Box, Checkbox, IconButton, ListItem } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id)
    }

    function handleRemoveClick() {
        removeTodo(todo.id)
    }

    return (
        <Box sx={{ borderRadius: 1, border: 5, display: "flex", borderRadius: 16, mt: 2 }} style={{ backgroundColor: todo.completed ? "red" : null }}>
            <ListItem style={{ display: "flex" }}>
                <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
                <Box justifyContent="center" alignItems="center" >
                    <Typography variant="body1" style={{
                        textDecoration: todo.completed ? "line-through" : null,
                    }}> ⏰ Dummy Deadline</Typography>
                    <Typography variant="body1" style={{
                        textDecoration: todo.completed ? "line-through" : null,
                    }} >{todo.task}</Typography>
                </Box>
                <IconButton onClick={handleRemoveClick}>
                    <CloseIcon />
                </IconButton>
            </ListItem>
        </Box >
    )
}

export default Todo