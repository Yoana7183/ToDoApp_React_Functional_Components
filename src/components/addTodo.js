import React, { useState, createRef } from 'react';



function AddTodo(props) {

    let inputRef = createRef();
    let [value, setValue] = useState("")


    const clickHandler = (e) => {
        props.addTodo(value)
        setValue("")
        inputRef.current.focus()
    }

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
                onClick={clickHandler}
                type="button">Add</button>
        </div>
    );
}



export default AddTodo;



