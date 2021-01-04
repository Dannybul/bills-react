import React from "react";
import Bills from "./Bills";
import Input from "./Input";
let subject = "water resources development";
const url =
  "https://api.propublica.org/congress/v1/bills/subjects/" + subject + ".json";

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      isDisplayed: false,
    };
  }

  componentDidMount() {
    this.callApi(url);
  }

  componentDidUpdate() {
    console.log("categories updated");
    console.log(this.state.bills);
  }

  changeSubject = () => {};

  async callApi(apiUrl) {
    try {
      let response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-API-Key": "ewzo1NlgyHsISCfzkgVniHyLBCvN4JtjpXWsDKks",
        },
      });
      let json = await response.json();
      await console.log(json);
      let billsResult = await json.results;
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
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <Input />
        <Bills billsArray={this.state.bills} />
      </div>
    );
  }
}
