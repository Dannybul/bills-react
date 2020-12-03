import React from "react";
import logo from "./logo.svg";
import Bills from "./Bills";
import Bill from "./Bill";

import "./App.css";
import PersonalInfo from "./PersonalInfo";

const url =
  "https://api.propublica.org/congress/v1/116/house/bills/introduced.json";
let json = {};
export default class App extends React.Component {
  //make state with bills
  constructor(props) {
    super(props);
    this.state = {
      bills: 0,
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
      this.setState({
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Bills billsArray={this.state.bills} />
        <Bill />
        <PersonalInfo />
      </div>
    );
  }
}
