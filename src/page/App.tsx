import "./App.css";
import { ReactElement } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { routes } from "../router";
// import { Home } from "./Home";

function Home() {
  return <h2>Home</h2>;
}
function App(): ReactElement<any, any> {

  return (
    <Router>
      <div className="App">
        <Link to="/index">跳转</Link>
        <Link to="/as">跳转</Link>
        <Link to="/">跳转</Link>

        <Switch>
          <Route path="/index" >
            dsadsads
          </Route>
          <Route path="/as" >
            <Home />
          </Route>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
