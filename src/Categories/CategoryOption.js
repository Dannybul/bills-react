import React from "react";

const CategoryOption = (props) => {
  return (
    <div class="categoryOption">
      <button onClick = { () => {props.changeSubject(props.option)}}>
        {props.option}
      </button>
    </div>
  );
};

export default CategoryOption;
