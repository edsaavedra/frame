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
            <input type="text" className="teal lighten-5" ref={node => input = node}/>
            <button type="submit" className="btn">Add</button>
        </form>
    );
}

export default AddTodo;