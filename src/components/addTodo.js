import React, { useState, createRef } from 'react';



const AddTodo=({addTodo})=> {

    let inputRef = createRef();
    let [value, setValue] = useState("")

    return (
        <div className="todo-add-div">
            <input type="text"
                ref={inputRef}
                className="todo-add"
                autoFocus
                placeholder="Add new todo ..."
                value={value}
                onChange={(e) => { setValue(e.target.value) }} />
            <button
                className="todo-add-btn"
                onClick={(e) => {
                    addTodo(value)
                    setValue("")
                }}
                type="button">Add</button>
        </div>
    );
}



export default AddTodo;



