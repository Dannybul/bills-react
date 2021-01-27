import React from "react";
import Bill from "./Bill";
import { connect } from "react-redux";
/*
  It has access to the store in props and will need to change it once I have the server up
  Probably won't need own props anymore
*/

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

function mapStateToProps(state, ownProps) {
  return { state, ownProps };
}

export default connect(mapStateToProps)(Bills);
