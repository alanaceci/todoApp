import '../css/Item.css'
import React from "react"
const Item = ({ item, handleToggle }) => {
    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id)
    }

    return (
        <ul className="item">
            <label htmlFor={item.id}
                id={item.id}
                key={item.id + item.task}
                onClick={handleClick}
                className={item.complete ? "complete" : "incomplete"} >
                {item.task}
            </label>
        </ul>
    )
}

export default Item;