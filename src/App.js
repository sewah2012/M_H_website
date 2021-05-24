import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About'
import PageNotFound from './Pages/Page404/PageNotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/service" component={Service} /> */}
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App
