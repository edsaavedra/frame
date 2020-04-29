import React from 'react';
import PropTypes from 'prop-types'

const TodoList = ({ todos = [], onFinishTodo }) => {
    return (
        <ul className="collection">
            {todos.map((todo, idx) => (
                <li
                    key={idx}
                    className={`collection-item ${todo.status ? "" : "disabled"}`}
                    onClick={onFinishTodo.bind(null, todo.id)}>{todo.text}</li>
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    onFinishTodo: PropTypes.func
}

export default TodoList;