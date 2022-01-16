import { useState } from 'react'
import './Todo.css'

export default function Todo({ name, id, dateCreated, complete, deleteTask, toggleTaskCompleted, editTask }) {
	const [isEditing, setEditing] = useState(false)
	const [newName, setNewName] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		editTask(id, newName)
		setNewName('')
		setEditing(false)
	}

	const editingTemplate = (
		<li className='todo edit'>
			<form className="todo__edit" onSubmit={handleSubmit}>
				<div className="todo__task">
					<input
						id={id}
						className="todo-text"
						type="text"
						value={newName}
						onChange={e => setNewName(e.target.value)}
					/>
					<label className="todo-label" htmlFor={id}>
						New task name
					</label>
				</div>
				<div className="btn-group">
					<button type="submit" className="btn btn__primary todo-edit">
						Save
					</button>
					<button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
						Cancel
					</button>
				</div>
			</form>
		</li>
	)
	const viewTemplate = (
		<li className="todo" data-id={id} data-complete={complete}>
	 		<div className="todo__task">
	 			<input
	 				type="checkbox"
	 				className="todo__checkbox"
	 				id={id}
	 				onChange={() => toggleTaskCompleted(id)}
					checked={complete}
	 			/>
	 			<label htmlFor={id}>
	 				{name}
	 			</label>
	 			{dateCreated && <div className="date-created">Date Created: <span>{dateCreated}</span></div>}
	 		</div>
	 		<div className="btn-group">
			 {!complete && <>
					<button
						type="button"
						className="btn btn-edit"
						onClick={() => setEditing(true)}
					>Edit</button>
					<button
						type="button"
						className="btn btn-delete"
						onClick={() => deleteTask(id)}
					>Delete</button>
				</>}
	 		</div>
	 	</li>
	)

	return <>{isEditing ? editingTemplate : viewTemplate}</>
}
