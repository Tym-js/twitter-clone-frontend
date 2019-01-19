import React from "react";
import { Segment, Item, Button } from "semantic-ui-react";

const Notification = () => (
  <Segment>
    <Item.Group>
      <Item>
        <Item.Image
          size="mini"
          circular
          src="https://randomuser.me/api/portraits/women/20.jpg"
        />
        <Item.Content verticalAlign="middle">Name</Item.Content>
        <Button basic color="blue" circular size="mini">
          Follow
        </Button>
      </Item>
    </Item.Group>
  </Segment>
);

export default Notification;
