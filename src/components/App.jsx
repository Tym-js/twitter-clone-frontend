import React from "react"
import { Container } from "semantic-ui-react"
import { Switch, Route } from "react-router-dom"

import Login from "./auth/Login.jsx"
import Register from "./auth/Register.jsx"

import HomePage from "./home/HomePage.jsx"
import Navbar from "./navbar/Navbar.jsx"
import Dashboard from "./dashboard/Dashboard.jsx"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <Route
        path="/me/(.+)"
        render={() => (
          <div>
            <Container>
              <Navbar />
              <Switch>
                <Route path="/me/tweets" component={Dashboard} />
              </Switch>
            </Container>
          </div>
        )}
      />
    </div>
  )
}

export default App
