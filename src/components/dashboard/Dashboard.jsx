import React from "react";
import { Grid } from "semantic-ui-react";
import uuid from "uuid";
import User from "./user/User.jsx";

const user = {
  name: "Matthew",
  photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
  joinedDate: "Joined in 2015",
  userDescription: "Matthew is a musician living in Nashville.",
  friends: [{ name: "name1" }, { name: "name2" }]
};

const tweets = [
  {
    id: uuid(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user: {
      name: user.name,
      photoURL: user.photoURL
    }
  },
  {
    id: uuid(),
    content: "Test test Test",
    user: {
      name: user.name,
      photoURL: user.photoURL
    }
  },
  {
    id: uuid(),
    content: "test Test test",
    user: {
      name: user.name,
      photoURL: user.photoURL
    }
  }
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <User user={user} />
        </Grid.Column>
        <Grid.Column width={8} />
      </Grid>
    );
  }
}

export default Dashboard;
