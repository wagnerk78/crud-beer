import React from 'react'

import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'


import Login from '../containers/Login'
import Register from '../containers/Register'
import Principal from '../containers/Principal'


function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <Route component={Principal} path="/principal" />
      </Switch>
    </Router>
  )
}

export default Routes