import React from "react";
import logo from "./logo.svg";
import Bills from "./Bills";
import Nav from "./Nav";

import "./App.css";
import PersonalInfo from "./PersonalInfo";

export default class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}
