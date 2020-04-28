import React from 'react';
import AddTodoContainer from './components/AddTodoContainer';
import TodoListContainer from './components/TodoListContainer';

function App() {
  return (
    <div className="App">
      <AddTodoContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
