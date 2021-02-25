import React, { useState } from "react"
import '../css/AddItem.css'
const AddItem = (props) => {
    const [toDoInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    // add task to TodoList 
    const handleSubmit = (e) => {
        // prevent page reload
        e.preventDefault();
        props.addToDo(toDoInput);
        // clear form after submission
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={toDoInput}
                className="input" 
                type="text"
                onChange={handleChange}
                placeholder="Add an item">
            </input>

        </form>

    )


}

export default AddItem;