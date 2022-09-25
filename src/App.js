
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import AddTodo from './components/addTodo';
import ListTodos from './components/todoList';
import TodoCounter from './components/todoCounter';



const TodoApp = () => {

	let url = ' http://localhost:8000/todos'
	let [todos, setTodos] = useState([])

	let fetchTodos = () => {
		fetch(url)
			.then(r => {
				if (r.ok) {
					return r.json()
				}
			})
			.then(data => {
				setTodos(data)
			})
			.catch(err => console.warn(err));
	}

	useEffect(fetchTodos, [])

	const addTodo = (title) => {

		const newTodo = {

			title: title,
			completed: false,
		}

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(newTodo),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			.then(resp => {
				if (resp.ok) {
					return resp.json()
				}
			}
			)
			.then(todo => {
				setTodos([...todos, todo])
			})

			.catch(err => console.warn(err));
	}

	const deleteTodo = (todo) => {

		var deleteURL = url + '/' + todo.id;

		fetch(deleteURL, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			},
		})
			.then(res => {
				if (res.ok) {
					setTodos([...todos.filter(({ id }) => id !== todo.id)]);
				}
				return res
			})
			.catch(err => console.warn(err));
	}


	const completeTodo = (todo) => {

		var completeTodoURL = url + '/' + todo.id;

		todo.completed = true;

		fetch(completeTodoURL, {
			method: 'PUT',
			body: JSON.stringify(todo),
			headers: { 'Content-Type': 'application/json' },
		})
			.then(res => {
				if (res.ok) {

					setTodos([...todos])
				}
				else { return res }

			})
			.catch(err => console.warn(err));
	}

	const undoneTodo = (todo) => {

		var completeTodoURL = url + '/' + todo.id;

		todo.completed = false;

		fetch(completeTodoURL, {
			method: 'PUT',
			body: JSON.stringify(todo),
			headers: { 'Content-Type': 'application/json' },
		})
			.then(res => {
				if (res.ok) {

					setTodos([...todos])
				}
				else { return res }
			})
			.catch(err => console.warn(err));
	}


	return (
		<div className="page">
			<Header />
			<main className="todo-app">
				<AddTodo addTodo={addTodo} />
				<ListTodos todos={todos}
					deleteTodo={deleteTodo}
					completeTodo={completeTodo}
					undoneTodo={undoneTodo} />
				<TodoCounter todos={todos} />

			</main>
		</div>
	);

}

export default TodoApp;
