import React from "react";

import logo from "./logo.svg";
import Bills from "./Bills";

import "./App.css";
import PersonalInfo from "./PersonalInfo";

const url =
  "https://api.propublica.org/congress/v1/116/house/bills/introduced.json";
export default class Home extends React.Component {
  //make state with bills

  constructor(props, context) {
    super(props);
    this.state = {
      bills: [],
    };
    console.log("in props");
    console.log(props);

    props.apiCall = props.apiCall.bind(this);
  }

  apiCall() {
    this.props.apiCall();
  }

  componentDidMount() {
    this.props.apiCall(url);
  }

  parseAndUpdateData(response) {
    try {
      console.log(response);
      let billsResult = response.results[0].bills;
      console.log(response.copyright);

      this.setState({
        bills: billsResult,
      });
    } catch (error) {
      console.log(error);
    }
    //Should I validate all data works?
    //Are there security risks
  }

  componentDidUpdate() {
    console.log("updated state" + this.state.bills);
  }

  render() {
    return (
      <div id="home">
        <Bills billsArray={this.state.bills} />
      </div>
    );
  }
}
