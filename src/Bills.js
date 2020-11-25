import React from "react";

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
  return (
    <div>
      <h1 onClick={props.hi}>Bills.js</h1>
    </div>
  );
};

export default Bills;
