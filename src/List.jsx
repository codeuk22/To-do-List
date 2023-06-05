import React from "react";

const List = (props) => {
  return (
    <>
      <div className="lost">
        <button
          className="bt"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          ×
        </button>
        <li> {props.text}</li>
      </div>
    </>
  );
};

export default List;
