import React from 'react';

const TodoList = ({ todos = [], onFinishTodo, onDeleteTodo }) => {
    return (
        <ul className="collection">
            {todos.map((todo, idx) => (
                <li
                    key={idx}
                    className={`collection-item ${todo.status ? "" : "disabled"}`}>
                    <span onClick={onFinishTodo.bind(null, todo.id)}>{todo.text}</span>
                    <button className="btn" onClick={onDeleteTodo.bind(null, todo.id)}>
                        <i className="material-icons">delete</i>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
