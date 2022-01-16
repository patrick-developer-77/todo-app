import { useState } from 'react';
import './AddTodo.css'

export default function AddTodo({ addTask }) {
	const [name, setName] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		if (!name) return
		addTask(name)
		setName('')
	}
	return (
		<form className="add-todo" onSubmit={handleSubmit}>
			<label htmlFor="addTodo">
				<input
					type="text"
					id="addTodo"
					placeholder="What needs to be done?"
					className="input input__lg"
					name={"text"}
					autoComplete="off"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</label>
			<button className="btn" type="submit">Add</button>
		</form>
	)
}
