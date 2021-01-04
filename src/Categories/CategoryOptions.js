import React from "react";
import CategoryOption from "./CategoryOption";

const CategoryOptions = (props) => {
  return (
    <div id="CategoryOptions">
      {props.options.map((option) => {
        return <CategoryOption option={option} changeSubject = {props.changeSubject}/>;
      })}
    </div>
  );
};

export default CategoryOptions;
