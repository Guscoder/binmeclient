import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./components/Home";
import ViewBin from "./components/ViewBin";
import CreateBin from "./components/CreateBin";
import "./App.css";

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/viewbin' component={ViewBin} />
        <Route path='/createbin' component={CreateBin} />
      </Switch>
    </Router>
  );
}

export default App;
