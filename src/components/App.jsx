import React from "react";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import firebase from "firebase";

import { setUser, clearUser } from "../actions/authedUser";

import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";

import HomePage from "./home/HomePage.jsx";
import Navbar from "./navbar/Navbar.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";

class App extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push(`/${user.uid}/tweets`);
        this.props.setUser(user);
      } else {
        this.props.history.push("/login");
        this.props.clearUser(user);
      }
    });
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Route
          path={`/${this.props.user.uid}/(.+)`}
          render={() => (
            <div>
              <Container>
                <Navbar />
                <Switch>
                  <Route
                    path={`/${this.props.user.uid}/tweets`}
                    component={Dashboard}
                  />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authedUser
});

export default withRouter(
  connect(
    mapStateToProps,
    { setUser, clearUser }
  )(App)
);
