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

  getBills = () => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "GET",
        headers: {
          "X-API-Key": "ewzo1NlgyHsISCfzkgVniHyLBCvN4JtjpXWsDKks",
        },
      });
    });
  };

  async componentDidMount() {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "X-API-Key": "ewzo1NlgyHsISCfzkgVniHyLBCvN4JtjpXWsDKks",
      },
    });
    json = await response.json();
    //let json = await console.log(response.json());
    let bills = await json.results[0];
    console.log(bills);
    debugger;
    //need await and async
    //Don't think that fetch is working correctly

    //}).then((res) => this.setState(() => ({ bills: res })));

    //send this to bills
    //console.log("bills state" + this.state.bills);
  }

  // async function callApi(url) {
  //   try {
  //     await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "X-API-Key": "ewzo1NlgyHsISCfzkgVniHyLBCvN4JtjpXWsDKks",
  //       },
  //     })
  //       .then((resp) => resp.json())
  //       .then(function (data) {
  //         //console.log(data);
  //         return data;
  //       });
  //   } catch {
  //     console.log("error");
  //   }
  // }

  componentDidUpdate() {
    //let parsedData = JSON.parse(this.state.bills);
    console.log(this.state.bills);
  }

  hi = () => {
    //where we will put the api info
    console.log("hi");
  };
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
        <Bills hi={this.hi} />
        <PersonalInfo />
      </div>
    );
  }
}
