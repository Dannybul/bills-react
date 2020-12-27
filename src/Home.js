import React from "react";


import logo from "./logo.svg";
import Bills from "./Bills";

import "./App.css";
import PersonalInfo from "./PersonalInfo";

const url =
"https://api.propublica.org/congress/v1/bills/subjects/meat.json"
let json = {};
export default class Home extends React.Component {
  //make state with bills
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
    };
  }

  componentDidMount() {
    this.callApi(url);
  }

  async callApi(apiUrl) {
    try {
      let response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-API-Key": "ewzo1NlgyHsISCfzkgVniHyLBCvN4JtjpXWsDKks",
        },
      });
      json = await response.json();
      let billsResult = await json.results[0].bills;
      //Should I validate all data works?
      //Are there security risks
      await this.setState({
        bills: billsResult,
      });
    } catch {
      alert("Error: Could not get bill data");
    }

    //parse for errors
    //update state with await function
  }

  componentDidUpdate() {
    console.log("updated state");
  }

  render() {
    return (
      <div id = "home">
        <Bills billsArray={this.state.bills} />
      </div>
    );
  }
}
