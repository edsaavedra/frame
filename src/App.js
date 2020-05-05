import React from 'react';
import AddTodoContainer from './components/AddTodoContainer';
import TodoListContainer from './components/TodoListContainer';
import ImagesContainer from './components/ImagesContainer';
import './App.css';

function App() {
  return (
    <div className="App container">
      <h2 className="teal-text">Things to do:</h2>
      <AddTodoContainer />
      <TodoListContainer />
      <ImagesContainer />
    </div>
  );
}

export default App;
