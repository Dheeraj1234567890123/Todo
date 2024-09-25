import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'
const todoList = [
  {
    task: 'Learn HTML',
    id: uuidv4(),
  },
  {
    task: 'Learn CSS',
    id: uuidv4(),
  },
  {
    task: 'Learn SQL',
    id: uuidv4(),
  },
]
class TodoManagement extends Component {
  state = {
    text: '',
    initialTodoList: [],
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text, initialTodoList} = this.state
    return (
      <div className="todos-bg-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="todos-heading">Todos</h1>
              <h1 className="create-task-heading">
                Create <span className="create-task-heading-subpart">Task</span>
              </h1>
              <input
                type="text"
                id="todoUserInput"
                className="todo-user-input"
                placeHolder="What needs to be done?"
                onChange={this.onChangeText}
              />
              <button
                className="button"
                id="addTodoButton"
                onClick={this.onAddTask}
              >
                Add
              </button>
              <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Tasks</span>
              </h1>
              <ul className="todo-items-container" id="todoItemsContainer"></ul>
              <button className="button" id="saveTodoButton">
                Save
              </button>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TodoManagement
