import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import StartStakingPage from "./pages/startStaking";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={StartStakingPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
