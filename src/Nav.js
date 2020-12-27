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
            <Route exact path="/" component={Home} />
            <Route exact path="/Categories" component={Categories} />
            <Route exact path="/About" component={About} />
            <Route exact path="/PageNotFound" component={PageNotFound} />
            <Redirect exact from="./" component={Home} />
            <Redirect to="/PageNotFound" />
          </Switch>
        </Router>
      </div>
    );
  }
}
