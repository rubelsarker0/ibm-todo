import { useState } from 'react';
import React from 'react';

const AddTodo = ({ onAdd }) => {
	const [text, setText] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		if (!text) {
			alert('Please add a todo');
			return;
		}

		onAdd({ text });
		setText('');
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Todo</label>
				<input
					type="text"
					placeholder="Add Todo"
					value={text}
					onChange={(event) => setText(event.target.value)}
				/>
			</div>
			<input type="submit" value="Save Todo" className="btn btn-block" />
		</form>
	);
};

export default AddTodo;
