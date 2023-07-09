import "../header/header.css"
import React from "react"

const Header = React.memo(() => {
    console.log("Headerrrrr")
    return (
        <div className="header">
            <h1 className="headerText">To Do List</h1>
        </div>
    )
})

export default Header;