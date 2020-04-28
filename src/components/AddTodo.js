import React from 'react';

const AddTodo = ({onAddTodo}) => {
    let input;
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const {value} = input;
            if (!value) return;
            onAddTodo(value);
        }}>
            <input type="text" name="newTodo" ref={node => input = node}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;