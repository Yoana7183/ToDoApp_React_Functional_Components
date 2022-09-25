import React from "react";


const ListTodos = ({
    
	todos,
	deleteTodo,
	completeTodo,
	undoneTodo
}) => {


	return (
		<ol className="todo-list-items">
			{
				todos.map(todo => {

					if (!todo.completed) {

						return <li className="todoTitle" key={todo.id} dataid={todo.id}>
							<span id="title">{todo.title}</span>

							<button className="deleteBtn" id={todo.id} onClick={() => { deleteTodo(todo) }}>Delete</button>
							<button id={todo.id} className="completeBtn" onClick={() => { completeTodo(todo) }}>Done</button>
						</li>

					} else {

						return <li className="todoTitle" id="title" key={todo.id} dataid={todo.id}>
							<span className="done" id="title" >{todo.title}</span>

							<button id={todo.id} className="deleteBtn" onClick={() => { deleteTodo(todo) }}>Delete</button>
							<button id={todo.id} className="undoneBtn" onClick={() => { undoneTodo(todo) }}>Undone</button>
						</li>

					}

				})

			}
		</ol>
	);

}

export default ListTodos