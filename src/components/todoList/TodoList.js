import ListItem from "../listItem/ListItem";


const TodoList = ({list,handleRemove,handleUpdate}) => list.map(listItem => (
    <div key ={listItem.id}>
        <ListItem listItem ={listItem} handleRemove={handleRemove} handleUpdate={handleUpdate} isCheked={listItem.isCheked}/>
        </div>
))

export default TodoList;