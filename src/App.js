import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/service" component={Service} /> */}
      </Switch>
    </Router>
  );
}

export default App;
