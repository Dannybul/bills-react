import React from "react";

const style = {
  color: "green",
  align: "left",
};
const Bill = (props) => {
  return (
    <li style={style}>
      {props.info.title} {props.info.bill_id}
    </li>
  );
};

export default Bill;
