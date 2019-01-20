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
        <Form onSubmit={this.handleSubmit}>
          <Modal.Content>
            <Form.TextArea
              name="content"
              onChange={this.handleChange}
              value={content}
              placeholder="Tell us more"
            />
          </Modal.Content>

          <Modal.Actions>
            <Button color="blue" onClick={this.handleSubmit}>
              <Icon name="checkmark" /> Post
            </Button>
          </Modal.Actions>
        </Form>
      </Modal>
    );
  }
}

export default TweetModal;
