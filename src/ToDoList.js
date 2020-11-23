import React, { useState } from 'react'
import './App.css'
import { List } from "./List";

// importing material ui add-button
import AddIcon from '@material-ui/icons/Add'; 


function ToDoList() {

  let [item, setItem] = useState("");
  let [listItem, setListItem] = useState([]);

  const changeInput = (event) => {
    setItem(event.target.value)
  }

  const updateList = (event) => {
    event.preventDefault();
    setListItem((listval) => {
      return [...listval, item]
    });
    setItem("");

  }

  const deleteItem = (id) => {
    setListItem((arritem) => {
      return arritem.filter((arrayElement, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="fullPage">
      <div className="box">
        <form onSubmit={updateList}>
          <h1>ToDo List</h1>
          <div className="inputfield">
            <input
              required 
              type="text" 
              placeholder="Add an Item" 
              value={item}
              onChange={changeInput}  
            />
            <button className="addbutton">
              <AddIcon className="icon"/>
            </button>
          </div>
          <br />
          <br />
          {listItem.map((listExtend, index) => {
            return <List  list={listExtend} key={index} id={index} onSelect={deleteItem} />;
          })}
        </form>
      </div>
    </div>
  )
}

export default ToDoList;
