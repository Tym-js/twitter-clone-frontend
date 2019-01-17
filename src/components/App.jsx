import React from "react"
import { Container } from "semantic-ui-react"
import { Switch, Route } from "react-router-dom"

import HomePage from "./home/HomePage.jsx"
import Navbar from "./navbar/Navbar.jsx"
import Dashboard from "./dashboard/Dashboard.jsx"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Route
        path="/(.+)"
        render={() => (
          <div>
            <Container>
              <Navbar />
              <Switch>
                <Route path="/tweets" component={Dashboard} />
              </Switch>
            </Container>
          </div>
        )}
      />
    </div>
  )
}

export default App
