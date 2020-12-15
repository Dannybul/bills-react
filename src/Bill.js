import React from "react";

const style = {
  color: "green",
};
const Bill = (props) => {
  console.log(props.info);

  return <li style={style}>{props.info.title}</li>;
};

export default Bill;
