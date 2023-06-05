import React, { useState } from "react";
import List from "./List";

function App() {
  const [inputList, setinputList] = useState("");
  const [items, setitems] = useState([]);

  function itemEvent(event) {
    setinputList(event.target.value);
  }

  function list() {
    setitems((olditems) => {
      return [...olditems, inputList];
    });
    setinputList("");
  }

  function deleteItem(id) {
    setitems((olditems) => {
      return olditems.filter((arrElement, index) => {
        return id !== index;
      });
    });
  }

  return (
    <>
      <div className="main">
        <div className="box">
          <h1>To Do List</h1>
          <input
            type="text"
            placeholder="Add items"
            onChange={itemEvent}
            value={inputList}
          />
          <button className="btn" onClick={list}>
            +
          </button>
          <br />
          <br />
          <ul>
            {items.map((itemval, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
