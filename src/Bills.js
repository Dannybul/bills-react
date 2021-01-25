import React from "react";
import Bill from "./Bill";

const Bills = (props) => {
  const billsArray = props.billsArray;
  if (billsArray !== undefined) {
    return (
      <div>
        <ul>
          {billsArray.map((b) => {
            return <Bill info={b} key={b.bill_id} />;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h2>No bills to display</h2>
      </div>
    );
  }
};

export default Bills;
