import React from "react"
import { Segment, Item, Icon, List } from "semantic-ui-react"

const TweetItem = ({ tweet }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="mini" circular src={tweet.user.photoURL} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h6">{tweet.user.name}</Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
        <Item.Group>
          <Item.Description>{tweet.content}</Item.Description>
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
        </List>
      </Segment>
    </Segment.Group>
  )
}

export default TweetItem
