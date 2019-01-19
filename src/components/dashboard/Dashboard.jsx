import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import User from "./user/User.jsx";
import TweetList from "./tweets/TweetList.jsx";
import Notification from "./notification/Notification.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const { authedUser, tweets, users } = this.props;
    return (
      <Grid>
        <Grid.Column width={4}>
          <User user={authedUser} />
        </Grid.Column>
        <Grid.Column width={8}>
          <TweetList tweets={tweets} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Notification users={users} />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  authedUser: state.authedUser,
  tweets: state.tweets,
  users: state.users
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
