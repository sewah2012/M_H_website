import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About'
import PageNotFound from './Pages/Page404/PageNotFound'
import ServicesPage from './Pages/ServicesPage/ServicesPage'
import ScrollToTop from './utility/ScrollToTop'
import ContactPage from './Pages/ContactPage/ContactPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App
