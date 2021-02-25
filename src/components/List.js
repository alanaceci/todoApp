import React from 'react'
import Item from './Item'

const List = ({ toDoItems, handleToggle }) => {
  return (
    <div>
      <h2> TO DO LIST </h2>
      <div>
        {toDoItems.map((item) => {
          return <Item item={item} handleToggle={handleToggle} key={item.id + item.task}/>
        })}
      </div>
    </div>
  )
}

export default List;