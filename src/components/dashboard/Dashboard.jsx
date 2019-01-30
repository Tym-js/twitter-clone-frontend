import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import User from "./user/User.jsx";
import TweetList from "./tweets/TweetList.jsx";
import TweetModal from "./tweets/TweetModal.jsx";
import { openModal, closeModal } from "../../actions/tweetModal";
import { getPosts } from "../../actions/posts";
import Notification from "./notification/Notification.jsx";
import firebase from "../../firebase";
var db = firebase.firestore();

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  deletePost = postId => {
    const currentUser = this.props.currentUser;
    db.collection("users")
      .doc(currentUser.uid)
      .collection("myPosts")
      .doc(postId)
      .delete()
      .then(() => {
        this.props.getPosts(currentUser);
      });
  };

  render() {
    const {
      currentUser,
      users,
      posts,
      tweetModal,
      openModal,
      closeModal,
      getPosts
    } = this.props;

    return (
      <Grid>
        <Grid.Column width={4}>
          <User user={currentUser} />
        </Grid.Column>
        <Grid.Column width={8}>
          <TweetList posts={posts} deletePost={this.deletePost} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Notification users={users} />
        </Grid.Column>
        <TweetModal
          currentUser={currentUser}
          tweetModal={tweetModal}
          openModal={openModal}
          closeModal={closeModal}
          getPosts={getPosts}
        />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  users: state.users.state,
  posts: state.posts.posts,
  tweetModal: state.tweetModal
});

export default connect(
  mapStateToProps,
  { openModal, closeModal, getPosts }
)(Dashboard);
