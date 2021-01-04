import React from "react";

import Bills from "./Bills";

import "./App.css";

const url =
  "https://api.propublica.org/congress/v1/116/house/bills/introduced.json";
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
    } catch (error) {
      //May want to send bugs to a remote server with error codes
      console.log(error);
      alert("Error: Could not get bill data");
    }

    //parse for errors
    //update state with await function
  }

  componentDidUpdate() {}

  render() {
    return (
      <div id="home">
        <Bills billsArray={this.state.bills} />
      </div>
    );
  }
}
