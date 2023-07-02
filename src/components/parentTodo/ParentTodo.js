import { useState } from "react";
import AddTodo from "../addTodo/AddTodo";
import Header from "../header/Header";
import TodoList from "../todoList/TodoList";
import initialList from "../../constants/initialList";

const ParentTodo = () => {
    const [list, setList] = useState([...initialList]);

    const handleRemove = (id) => {
        const result = list.filter(listItem => listItem.id !== id)
        setList([...result])
    }

    const handleUpdate = (id) => {
        const result = list.map(listItem => {
            if (listItem.id === id) {
                return {
                    ...listItem,
                    isCheked: !listItem.isCheked
                }
          }
          return listItem
        })
        setList([...result])
    }
    return (
        <div>
            <Header />
            <AddTodo />
            <TodoList list={list} handleRemove={handleRemove} handleUpdate={handleUpdate} />
        </div>
    )
}

export default ParentTodo;