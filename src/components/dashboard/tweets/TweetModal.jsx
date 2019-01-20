import React from "react";
import { Modal, Button, Header, Icon, Form, TextArea } from "semantic-ui-react";

class TweetModal extends React.Component {
  state = {
    content: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state.content);
    this.setState({
      content: ""
    });
  };

  render() {
    const { content } = this.state;
    const { tweetModal, closeModal, addPost } = this.props;
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
