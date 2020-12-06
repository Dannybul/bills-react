import React from "react";
import Bill from "./Bill";

// export default class Bills extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Bills.js</h1>
//       </div>

//     );
//   }
// }

const Bills = (props) => {
  const billsArray = props.billsArray;
  console.log("billsarray");
  if (billsArray !== undefined) {
    //console.log("in bills " + props.billsArray);
    return (
      <div>
        {billsArray.map((b) => {
          return <Bill info={b} key={b.bill_id} />;
        })}
        <h1>Bills</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Bills</h1>
      </div>
    );
  }
};

export default Bills;
