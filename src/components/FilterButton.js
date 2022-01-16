import './FilterButton.css'

export default function FilterButton({ isPressed, setFilter, name }) {
	return (
		<button
			type="button"
			className="btn btn-toggle"
			aria-pressed={isPressed}
			onClick={() => setFilter(name)}
		>
			<span className="visually-hidden">Show </span>
			<span>{name}</span>
			<span className="visually-hidden"> tasks</span>
		</button>
	)
}
