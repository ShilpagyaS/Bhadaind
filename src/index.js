import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import CagdasbyhtmltodesignFREEversion24062023140750GMT53 from './views/cagdasbyhtmltodesign-fr-eversion24062023140750gmt53'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={CagdasbyhtmltodesignFREEversion24062023140750GMT53}
          exact
          path="/"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
