import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";

const API_URL = 'http://127.0.0.1:8000/api/todo/'

function App() {
    const [todos, setTodos]= useState([])
    const[todo, setTodo] = useState({done: ''})

    async function getTodos(){
        const response = await axios.get(API_URL)
        setTodos(response.data)
        }

    useEffect(() => {
        getTodos()}, [])

    const sortTitle = (e) => {
        const sortedTodos = ([...todos].sort((todo1, todo2) => {
            return todo1.title.localeCompare(todo2.title, "rus")
            }))
        setTodos(sortedTodos)
        e.preventDefault()
        }

    const sortDescription = (e) => {
        const sortedTodos = ([...todos].sort((todo1, todo2) => {
            return todo1.description.localeCompare(todo2.description, "rus")
            }))
        setTodos(sortedTodos)
        e.preventDefault()
        }

    const sortDate = (e) => {
        const sortedTodos = ([...todos].sort((todo1, todo2) => {
            return new Date(todo2.date)-new Date (todo1.date)
            }))
        setTodos(sortedTodos)
        e.preventDefault()
        }

    const sortIsDone = (e) => {
        const sortedTodos = ([...todos].sort((todo1, todo2) => {
            return todo1.done - todo2.done
            }))
        setTodos(sortedTodos)
        e.preventDefault()
        }

    const removeTodo = (todo) =>{
        setTodos(todos.filter(t => t.id !== todo.id))
        axios.delete(API_URL + todo.id.toString() + '/')
        }

    const editDone = (todo, done) => {
        todo.done = done
        setTodo({done: done})
        axios.patch(API_URL + todo.id.toString() + '/',{
        done : done
        })
        }

    const createTodo = (newTodo) =>{
        axios.post(API_URL, newTodo)
        setTodos([...todos, newTodo])
        getTodos()
        }

    return (
        <div className="App">
            <div className="refresh" style={{float: "right"}}>
                <button class="btn btn-secondary" onClick={getTodos}>
                <span className="icon-refresh"></span>
                </button>
            </div>

            <div class="dropdown" style={{float: "right"}}>
                <button class="btn btn-secondary">Сортировать по
                    <div class="dropdown-content">
                        <button class="btn btn-secondary" onClick={sortTitle}>Названию</button>
                        <button class="btn btn-secondary" onClick={sortDescription}>Описанию</button>
                        <button class="btn btn-secondary" onClick={sortDate}>Дате</button>
                        <button class="btn btn-secondary" onClick={sortIsDone}>Статусу</button>
                    </div>
                </button>
            </div>

            <div className="form-add" style={{float: "center"}}>
                <AddTodo createTodo={createTodo}/>
            </div>

            <TodoList todos={todos} removeTodo={removeTodo} editDone={editDone} />
        </div>
        );
    }

export default App;
