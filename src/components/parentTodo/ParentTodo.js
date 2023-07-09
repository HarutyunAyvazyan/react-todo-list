import { useCallback, useState } from "react";
import AddTodo from "../addTodo/AddTodo";
import Header from "../header/Header";
import TodoList from "../todoList/TodoList";
import initialList from "../../constants/initialList";
import "../parentTodo/parentTodo.css"
import React from "react";

const ParentTodo = React.memo(() => {
    const [list, setList] = useState([...initialList]);

    const handleRemove = useCallback((id) => {
        const result = list.filter(listItem => listItem.id !== id)
        setList([...result])
        console.log(list,"listDelete")
    },[])

    const handleUpdate = useCallback((id) => {
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
    },[])

    const handleSave =useCallback( (id, newContent) => {
        const updateList = list.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    content: newContent,
                    isCheked: false
                } 
            } else {
                return item
            }
        })
        
        console.log(updateList);
        setList([...updateList])
    },[])

    const onAdd = useCallback((text) => {
        setList([
            ...list,
            {
                id:Math.random(),
                isCheked:false,
                content:text
            }
        ])
    },[])

    console.log("parentTOdoooooo")
    return (
        <div className="parentTodo">
            <Header />
            <AddTodo onAdd={onAdd}/>
            <TodoList list={list} handleRemove={handleRemove} handleUpdate={handleUpdate} handleSave={handleSave}/>
        </div>
    )
})

export default ParentTodo;