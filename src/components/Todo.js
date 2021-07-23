import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ todo, onDelete }) => {
	return (
		<div className="todo">
			<h3>
				{todo.text}{' '}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => onDelete(todo.id)}
				/>
			</h3>
			<p>{todo.day}</p>
		</div>
	);
};

export default Task;
