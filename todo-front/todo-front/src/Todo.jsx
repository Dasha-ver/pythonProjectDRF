import React from 'react';

const Todo = (props) =>{

    return (
        <tr>
            <td>{props.todo.title}</td>
            <td>{props.todo.description}</td>
            <td>{props.todo.date}</td>
            <td>{props.todo.done ?
                <b><span className="emoji-did"></span></b>:
                <b><span className="emoji-notdid"></span></b>
                }
            </td>
            <td>
                <button className="button-did" onClick={()=> props.editDone(props.todo, true)}>
                <span className="icon-did"></span>
                </button>
            </td>
            <td>
                <button className="button-did" onClick={()=> props.editDone(props.todo, false)}>
                <span className="icon-cancel"></span>
                </button>
            </td>
            <td>
                <button className="button-delete" onClick={()=> props.removeTodo(props.todo)}>
                <span className="icon-delete"></span>
                </button>
            </td>
        </tr>
        )
        }

export default Todo;

