import React from 'react';

function TodoCounter(props) {

    const counter = props.todos.length
    return (

        <div className="counter-todo">
            My Todo List Contains: <span className="space">{counter} Items</span>
        </div>
    );


}
export default TodoCounter