import { useCallback, useState } from "react";
import "../addTodo/addTodo.css"
import React from "react";

const AddTodo = React.memo(({ onAdd }) => {
    const [value, setValue] = useState("")

    const handleChange = useCallback((event) => {
        setValue(event.target.value)
    })

    const handleClick = () => {
        if (value !== "") {
            onAdd(value)
            setValue("")
        }
    }
    console.log("addTodo0")
    return (
        <div className="addTodoParentDiv">
            <input type="text" value={value} onChange={handleChange} className="addTodoInput" />
            <button onClick={handleClick} className="addTodoButton">Add</button>
        </div>
    )
})

export default AddTodo;