import React from "react";


class ListTodos extends React.Component {


	constructor(props) {
		super(props)
		this.state = {
			todoItems: this.props.todosFromProps
		}
	}

	render() {


		return (
			<ol className="todo-list-items">
				{
					this.props.todosFromProps.map(todo => {

						if (!todo.completed) {

							return <li className="todoTitle" key={todo.id.toString()}>
								<span id="title">{todo.title}</span>
						
								<button className="deleteBtn" id={todo.id} onClick={() => { this.props.deleteTodo(todo) }}>Delete</button>
								<button id={todo.id} className="completeBtn" onClick={() => { this.props.completeTodo(todo) }}>Done</button>
							</li>

						} else {

							return <li className="todoTitle"id="title" key={todo.id.toString()}>
								<span className="done"id="title" >{todo.title}</span>
					
								<button id={todo.id} className="deleteBtn" onClick={() => { this.props.deleteTodo(todo) }}>Delete</button>
								<button id={todo.id}  className="undoneBtn" onClick={() => { this.props.undoneTodo(todo) }}>Undone</button>
							</li>
							
						}
                       
					})

				}
			</ol>
		);
	}
}

export default ListTodos