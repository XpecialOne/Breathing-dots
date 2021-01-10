import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import './base.css'
import Demo1 from './demos/Demo1'
import Demo2 from './demos/Demo2'


function App() {
  return (
    <Router basename="/">
      <div className="frame">

        <div className="frame__demos">
          <Link to="/demo1" className="frame__demo">
            Infinite Loop
          </Link>
          <Link to="/demo2" className="frame__demo">
            Interactive (press/hold & release)
          </Link>
        </div>
      </div>
      <div className="content">
        <h2 className="content__title">Soufiane Masaïf</h2>
      </div>
      <div id="animation">
        <Switch>
          <Route exact path="/demo1">
            <Demo1 />
          </Route>
          <Route exact path="/demo2">
            <Demo2 />
          </Route>
          <Route path="*">
            <Redirect to="/demo1" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
