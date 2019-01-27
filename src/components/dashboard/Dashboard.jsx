import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import User from "./user/User.jsx";
import TweetList from "./tweets/TweetList.jsx";
import TweetModal from "./tweets/TweetModal.jsx";
import { openModal, closeModal } from "../../actions/tweetModal";
import Notification from "./notification/Notification.jsx";
import firebase from "../../firebase";
var db = firebase.firestore();

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      posts: []
    };
  }

  componentWillMount() {
    this.getPosts();
  }

  getPosts = () => {
    const currentUser = firebase.auth().currentUser;
    let posts = [];

    db.collection("posts")
      .orderBy("createdAt", "desc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (currentUser.uid === doc.data().createdBy) {
            posts.push({
              id: doc.id,
              content: doc.data().content,
              user: doc.data().createdBy
            });
          }
        });
        return posts;
      })
      .then(posts => {
        posts.map(post => {
          db.collection("users")
            .doc(post.user)
            .get()
            .then(doc => {
              post.user = {
                name: doc.data().name,
                photoURL: doc.data().photoURL
              };
            });
          return post;
        });
        return posts;
      })
      .then(posts => {
        this.setState({
          posts: posts
        });
      });
  };

  render() {
    const {
      authedUser,
      users,
      tweetModal,
      openModal,
      closeModal,
      addPost
    } = this.props;
    const { posts } = this.state;

    return (
      <Grid>
        <Grid.Column width={4}>
          <User user={authedUser} />
        </Grid.Column>
        <Grid.Column width={8}>
          <TweetList posts={posts} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Notification users={users} />
        </Grid.Column>
        <TweetModal
          authedUser={authedUser}
          tweetModal={tweetModal}
          openModal={openModal}
          closeModal={closeModal}
          addPost={addPost}
        />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  authedUser: state.authedUser,
  posts: state.posts,
  users: state.users,
  tweetModal: state.tweetModal
});

export default connect(
  mapStateToProps,
  { openModal, closeModal }
)(Dashboard);
