import React from "react";
import logo from "./logo.svg";
import Bills from "./Bills";
import "./App.css";
import PersonalInfo from "./PersonalInfo";

const url =
  "https://api.propublica.org/congress/v1/116/house/bills/introduced.json";
let json = {};
export default class App extends React.Component {
  //make state with bills
  state = {
    bills: "r",
  };

  componentDidMount() {
    this.callApi(url);
  }

  async callApi(apiUrl) {
    let response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-API-Key": "ewzo1NlgyHsISCfzkgVniHyLBCvN4JtjpXWsDKks",
      },
    });
    json = await response.json();
    let bills = await json.results[0].bills;
    //parse for errors
    //update state with await function
  }

  componentDidUpdate() {
    console.log(this.state.bills);
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
        <Bills />
        <PersonalInfo />
      </div>
    );
  }
}
