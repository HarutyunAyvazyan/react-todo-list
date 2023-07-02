import { useState } from "react";

const ListItem = ({ listItem, handleRemove, handleUpdate, isCheked }) => {
    const { content, id } = listItem;
    const [value, setValue] = useState(content);

  
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div>
            {isCheked ? <input value={value} onChange={handleChange}/> : <p>{content}</p>}
            <button onClick={() => handleRemove(id)}>x</button>
            <button onClick = {()=>handleUpdate(id)}>update</button>
        </div>
    )
}

export default ListItem;