import React from "react";
import firebase from "../../firebase";
import {
  Menu,
  Container,
  Input,
  Image,
  Button,
  Dropdown
} from "semantic-ui-react";
import { connect } from "react-redux";
import { openModal } from "../../actions/tweetModal";

class Navbar extends React.Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened.
      });
  };

  render() {
    const { activeItem } = this.state;
    const { authedUser, openModal } = this.props;

    return (
      <Menu>
        <Container>
          <Menu.Item
            header
            name="home"
            icon="home"
            content={"Home"}
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            header
            name="notifications"
            icon="bell"
            content={"Notifications"}
            active={activeItem === "notifications"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            header
            name="mail"
            icon="mail"
            content={"Messages"}
            active={activeItem === "mail"}
            onClick={this.handleItemClick}
          />
          <Menu.Item position="right">
            <Input
              icon={{ name: "search", circular: true, link: true }}
              placeholder="Search..."
            />
          </Menu.Item>
          <Menu.Item>
            <Image circular size="mini" src={authedUser.photoURL} />
            <Dropdown>
              <Dropdown.Menu>
                <Dropdown.Item text="Logout" onClick={this.handleSignOut} />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Button circular primary content={"Tweet"} onClick={openModal} />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

const mapStateTopProps = state => ({
  authedUser: state.authedUser
});

export default connect(
  mapStateTopProps,
  { openModal }
)(Navbar);
