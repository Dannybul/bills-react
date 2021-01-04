import React from "react";
import Bills from "../Bills";
import Input from "./Input";
import CategoryOptions from "./CategoryOptions";

const urlStart = "https://api.propublica.org/congress/v1/bills/subjects/";
const urlEnd = ".json";
const options = [
  "Energy",
  "Meat",
  "Agriculture",
  "Animals",
  "Wildlife",
  "Art",
  "Religion",
];

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      subject: "",
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  changeSubject = (topic) => {
    console.log("subject changed");
    if (this.state.subject !== topic && topic !== "") {
      console.log("in if");
      this.setState((prevState) => ({
        subject: topic,
      }));
      this.callApi(urlStart + topic + urlEnd);
    }
  };

  async callApi(apiUrl) {
    console.log(apiUrl);
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

      await this.setState({
        bills: billsResult,
      });

      //Should I validate all data works?
      //Are there security risks
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
        <CategoryOptions changeSubject={this.changeSubject} options={options} />
        <Input changeSubject={this.changeSubject} />
        <Bills billsArray={this.state.bills} />
      </div>
    );
  }
}
