import React from "react";

const json = {};
const url =   "https://api.propublica.org/congress/v1/116/house/bills/introduced.json";


export default class Categories extends React.Component {
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

  render() {
    return (
      <div>
        <h3>Categories</h3>
      </div>
    );
  }
}
