import { useState, useEffect } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
	const [showAddTodo, setShowAddTodo] = useState(false);

	const [todos, setTodos] = useState([
		{
			id: 1,
			text: 'First Todo',
		},
	]);

	// Add todo
	const addTodo = (todo) => {
		const id = Math.floor(Math.random() * 10000 + 1);
		const newTodo = { id, ...todo };
		setTodos([...todos, newTodo]);
	};

	//Delete Todo
	const deleteTask = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	// getting all the todo elements from localStorage
	useEffect(() => {
		const todoData = JSON.parse(localStorage.getItem('todo'));
		if (todoData.length !== 0) {
			setTodos(todoData);
		}
	}, []);

	// storing data to localStorage
	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todos));
	}, [todos]);

	return (
		<div className="container">
			<Header
				onAdd={() => setShowAddTodo(!showAddTodo)}
				showAdd={showAddTodo}
			/>
			{showAddTodo && <AddTodo onAdd={addTodo} />}
			{todos.length > 0 ? (
				<Todos todos={todos} onDelete={deleteTask} />
			) : (
				'No more task left'
			)}
		</div>
	);
}

export default App;

// Create a form (with proper HTML semantics) that includes the following:
// -A fieldset to hold your todo items
// -Text input to add a new item
// -Button to add new item
// When a new item is added, the following should happen:
// -Add an item to the fieldset with the following:
// —Name of the item
// —Checkbox to mark as done
// -Save item to localstorage
// -Input field cleared
// -Focus set to the input field
// When an item's checkbox is checked:
// -Remove the item from the document
// -Remove the item if it's saved locally
// -Reset the keyboard focus
// —If it's the last item, set keyboard focus to the input box
// —If there is an item after the removed item, set keyboard focus to that item's checkbox
// —If there is no item after the removed item, set the keyboard focus to the previous item's checkbox
// When the page is loaded:
// -Populate list of items from those saved locally
