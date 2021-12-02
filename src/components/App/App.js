import { React, useState } from "react";
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './App.css';

function App() {  

  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
