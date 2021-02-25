import React, { useState } from "react"
import '../css/App.css'
import Header from './Header';
import Time from './Time'
import List from './List'
import AddItem from './AddItem';
import Clear from './Clear';

// TODO react hooks: how they work

const App = () => {
  const initialList = []
  const [toDoItems, setItems] = useState(initialList)

  const addToDo = (toDoInput) => {
    let newList = [...toDoItems, { id: toDoItems.length + 1, task: toDoInput, complete: false }]
    setItems(newList);
  }

  const handleToggle = (index) => {
    let updated = toDoItems.map(item => {
      return item.id === Number(index) ? { ...item, complete: !item.complete } : { ...item };
    });
    setItems(updated);
  }

  const clearList = () => {
    let cleared = toDoItems.filter(item => {
      return !item.complete;
    });
    setItems(cleared);
  }

  return (
    <div className="wrapper">
      <div className="header">
        <Header />
        <Time />
      </div>

      <div className="list">
        <List toDoItems={toDoItems} handleToggle={handleToggle} />
        <AddItem addToDo={addToDo} />
      </div>

      <Clear clearList={clearList} />

    </div>
  );
}

export default App;
