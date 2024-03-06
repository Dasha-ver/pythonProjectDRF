import React from 'react';
import Todo from "./Todo";
import {useState} from "react";

const TodoList = ({todos, removeTodo, editDone}) => {

    const[value, setValue] = useState('')
    const filteredTodos = todos.filter(todo => {
        return todo.title.toLowerCase().includes(value.toLowerCase())
    })

    if (!todos.length){
        return <h1 className="todos-notfound"style = {{textAlign:"center"}}>Дела не найдены</h1>
    }

    return (
        <div >
            <div className="form-search" style={{float: "left"}}>
                <form>
                    <input className="input-search"
                    type="text"
                    placeholder="Поиск по тудушкам..."
                    onChange={(event) => setValue(event.target.value)}
                    />
                </form>
            </div>

            <table class="table table-hover" style={{width:"100%"}}>
                <thead>
                    <tr class="table-success" >
                        <th scope='colTitle'>Название</th>
                        <th scope='colDescription'>Описание</th>
                        <th scope='colDate'>Дата</th>
                        <th scope='colIsDone'>Статус</th>
                        <th scope='colSetDone'>Выполнить</th>
                        <th scope='colSetNotDone'>Отменить</th>
                        <th scope='colDelete'>Удалить</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredTodos.map(todo=> <Todo todo={todo} key={todo.id} removeTodo={removeTodo} editDone={editDone}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
