import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import StartStakingPage from "./pages/startStaking";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/how-to-stake" component={StartStakingPage} exact />
        <Route path="/banner-bg" component={Banner} exact />
      </Switch>
    </Router>
  );
}

export default App;
