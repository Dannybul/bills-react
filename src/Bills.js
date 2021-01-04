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
  if (billsArray !== undefined) {
    console.log("in bills " + props.billsArray);
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
