import React, { useCallback, useMemo, useState } from "react";
import "../listItem/listItem.css"

const ListItem = React.memo(({ listItem, handleRemove, handleUpdate, isCheked, handleSave: SAVE }) => {
    const { content, id } = listItem;
    const [value, setValue] = useState(content);


    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSave = () => {
        console.log("11")
        if (value.length > 0) {
            SAVE(id, value)
            // handleUpdate(id)
        } else {
            alert('dddd')
        }
    }

    console.log("ListItemmmmmmm")
    return (
        <div className="listItemDiv">
            {isCheked ?
                <input value={value} onChange={handleChange} className="listItemInput" />
                :
                <span className="listItemText" >{content}</span>}
            <div>
                <button onClick={() => handleRemove(id)} className="listItemDelete">x</button>
                <button onClick={!isCheked ? () => handleUpdate(id) : handleSave} className={isCheked ? "listItemUpdate" : "listItemSave"}>{isCheked ? "Save" : "Update"}</button>
            </div>
        </div>
    )
})

export default ListItem;