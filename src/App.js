import React from 'react'
import Header from './common/header/Header';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Pages from './pages/Pages';

const App = () => {

  return (

    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Pages />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;