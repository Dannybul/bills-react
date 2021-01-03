import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import Categories from "./Categories";
import Home from "./Home";
import About from "./About";
import PageNotFound from "./PageNotFound";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  async callApi(apiUrl) {
    let json = {};
    try {
      let response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-API-Key": "ewzo1NlgyHsISCfzkgVniHyLBCvN4JtjpXWsDKks",
        },
      });
      json = await response.json();
      await this.setState((state, props) => ({
        bills: json,
      }));
    } catch (error) {
      //May want to send bugs to a remote server with error codes
      console.log(error);
      alert("Error: Could not get bill data");
    }

    return json;

    //parse for errors
    //update state with await function
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/Categories"> Categories </Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
          </ul>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home apiCall={this.callApi} />}
            />
            <Route exact path="/Categories" component={Categories} />
            <Route exact path="/About" component={About} />
            <Route exact path="/PageNotFound" component={PageNotFound} />
            <Redirect exact from="./" to="/Home" component={Home} />
            <Redirect to="/PageNotFound" />
          </Switch>
        </Router>
      </div>
    );
  }
}
