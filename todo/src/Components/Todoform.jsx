import React from "react";
import { useState } from "react";

export function Todoform({addTodo}) {
    const [value, setValue] = useState('')
    const handleSubmit=(e)=>{
       e.preventDefault()
       addTodo(value);
       setValue('')
    }
    return (
        <form action="" className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className="todo-input"value={value} placeholder="what is the task today" 
            onChange={(e) => {setValue(e.target.value); }} />
            <button type="submit" className="todo-btn">Add task</button>

        </form>
    )
}

// export default Todoform 