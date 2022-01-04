import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { v4 } from "uuid"


function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (todo.task.trim()) {
            addTodo({ ...todo, id: v4() })
            // reset task input
            setTodo({ ...todo, task: "" })
        }
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <div>
                <TextField
                    label="Task"
                    name="task"
                    type="text"
                    value={todo.task}
                    size="small"
                    onChange={handleTaskInputChange} />
            </div>
            <Button variant="contained" sx={{ m: 2 }} type="submit" >Submit</Button>
        </form>
    )
}

export default TodoForm