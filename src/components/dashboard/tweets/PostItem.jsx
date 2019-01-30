import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";

class PostItem extends React.Component {
  handleDelete = () => {
    const { post } = this.props;
    this.props.deletePost(post.id);
  };

  render() {
    const { post } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="mini" circular src={post.user.photoURL} />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h6">{post.user.name}</Item.Header>
              </Item.Content>
            </Item>
          </Item.Group>
          <Item.Group>
            <Item.Description>{post.content}</Item.Description>
          </Item.Group>
        </Segment>
        <Segment clearing>
          <List horizontal>
            <List.Item>
              <Icon name="comment outline" /> 0
            </List.Item>
            <List.Item>
              <Icon name="exchange" /> 0
            </List.Item>
            <List.Item>
              <Icon name="heart outline" /> 0
            </List.Item>
            <List.Item>
              <Button name="trash alternate" onClick={this.handleDelete} />
            </List.Item>
          </List>
        </Segment>
      </Segment.Group>
    );
  }
}

export default PostItem;
