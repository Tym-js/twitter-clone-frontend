import React from "react";
import firebase from "../../../firebase";
import { Modal, Header, Icon, Form } from "semantic-ui-react";
var db = firebase.firestore();

class TweetModal extends React.Component {
  state = {
    content: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addPost(this.state.content);
    this.props.getPosts(this.props.currentUser);
    this.setState({
      content: ""
    });
    this.props.closeModal();
  };

  addPost = content => {
    const currentUser = this.props.currentUser;
    db.collection("users")
      .doc(currentUser.uid)
      .collection("myPosts")
      .add({
        content: content,
        createdBy: currentUser.uid,
        createdAt: new Date(),
        like_count: 0,
        user: {
          uid: currentUser.uid,
          name: currentUser.name,
          photoURL: currentUser.photoURL
        }
      });
  };

  render() {
    const { content } = this.state;
    const { tweetModal, closeModal } = this.props;
    return (
      <Modal
        open={tweetModal.isOpen}
        onClose={closeModal}
        closeIcon
        size="tiny"
      >
        <Header icon="comment alternate outline" content="compose new post" />{" "}
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.TextArea
              name="content"
              onChange={this.handleChange}
              value={content}
              placeholder="Tell us more"
            />
            <Form.Button color="blue" onClick={this.handleSubmit}>
              <Icon name="checkmark" /> Post
            </Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default TweetModal;
