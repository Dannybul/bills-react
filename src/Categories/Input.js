import React from "react";

const Input = (props) => {
  let changeSubject = props.changeSubject;
  let searchValue = () => {
    let searchBar = document.getElementById("searchBarCategories");
    let value = searchBar.value;
    return value;
  };
  return (
    <div class="input">
      <input type="text" placeholder="Search" id="searchBarCategories"></input>
      <button
        type="submit"
        onClick={() => {
          let value = searchValue();
          changeSubject(value);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Input;
