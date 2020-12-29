import React from "react";

const style = {
  color: "green",
};
const Bill = (props) => {
  return <li style={style}>{props.info.title}</li>;
};

export default Bill;
