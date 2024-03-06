import React, {useState} from 'react';

const AddTodo = ({createTodo}) => {

    const addNewTodo = (e) => {
        e.preventDefault()
        createTodo(todo)
        setTodo({title: '', description: ''})
        }

    const[todo, setTodo] = useState({title: '', description: ''})

    return (
        <form>
            <input className="input-title"
                type='text'
                placeholder='Дело'
                value={todo.title}
                onChange={e => setTodo({...todo, title: e.target.value})}
            />
            <input className="input-description"
                type='text'
                placeholder='Описание'
                value={todo.description}
                onChange={e => setTodo({...todo, description: e.target.value})}
            />
            <button class="btn btn-secondary" onClick={addNewTodo}>Создать дело</button>
        </form>
        )
        }

export default AddTodo;