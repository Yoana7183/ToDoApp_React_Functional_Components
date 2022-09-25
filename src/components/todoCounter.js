import React from 'react';

const TodoCounter = ({todos})=> {

    return (

        <div className="counter-todo">
            My Todo List Contains: <span className="space">{todos.length} Items</span>
        </div>
    );


}
export default TodoCounter