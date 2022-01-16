import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import { nanoid } from 'nanoid'
import FilterButton from './components/FilterButton';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.complete,
  Completed: task => task.complete
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function App( props ) {
  const [tasks, setTasks] = useState(props.tasks)
  const [filter, setFilter] = useState('All')

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  const getCreatedDate = () => {
    const d = new Date()
    const month = d.toLocaleString('default', { month: 'short' })
    return `${month} ${d.getDate()}, ${d.getFullYear()}`
  }

  const addTask = (name) => {
    const createdDate = getCreatedDate()
    const newTask = { id: `todo-${nanoid()}`, name, complete: false, createdDate }
    setTasks([newTask, ...tasks ])
  }

  const editTask = (id, newName) => {
    const newDate = getCreatedDate()
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName, createdDate: newDate}
      }
      return task
    })
    setTasks(editedTaskList)
  }

  const deleteTask = (id) => {
    const confirmation = window.confirm(`Are you sure you want to delete task ${id}?`)
    if (!confirmation) return
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks(remainingTasks)
  }

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, complete: !task.complete}
      }
      return task
    })
    setTasks(updatedTasks)

  }

  return (
    <>
      <Navbar tasks={tasks} />
      <div className="app">
        <AddTodo addTask={addTask} />
        <div className="btn-group">{filterList}</div>
        <ul>
          {tasks && tasks.filter(FILTER_MAP[filter]).map(task => (
            <Todo
              name={task.name}
              complete={task.complete}
              dateCreated={task.createdDate}
              id={task.id}
              key={task.id}
              editTask={editTask}
              deleteTask={deleteTask}
              toggleTaskCompleted={toggleTaskCompleted}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
