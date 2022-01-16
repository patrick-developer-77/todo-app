import './Navbar.css'

export default function Navbar({ tasks }) {
	const completeTasks = tasks.filter(task => task.complete === true)
	return (
		<div className="navbar">
			<h1>ToDo App</h1>
			<div>
				<h3>Tasks</h3>
				<p>{tasks.length} total</p>
				<p>{completeTasks.length} complete</p>
			</div>
		</div>
	)
}
