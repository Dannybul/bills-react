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
  const allBills = props.billsArray;

  if (allBills !== 0) {
    console.log(allBills);
    for (let i = 0; i < allBills.length; i++) {
      console.log(allBills[i].bill_id);
      //Need to figure out how to Send stuf to Bill
    }
  }

  return (
    <div>
      <h1>Bills</h1>
      <Bill />

    </div>
  );
};

export default Bills;
