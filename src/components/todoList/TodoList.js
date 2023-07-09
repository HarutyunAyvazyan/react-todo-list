import ListItem from "../listItem/ListItem";
import React from "react";

const TodoList = React.memo(({list,handleRemove,handleUpdate, handleSave}) => list.map(listItem => (
       <div key ={listItem.id}>
        <ListItem listItem ={listItem} handleRemove={handleRemove} handleUpdate={handleUpdate} isCheked={listItem.isCheked} handleSave={handleSave}/>
        </div>
)))

export default TodoList;