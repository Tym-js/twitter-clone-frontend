import React from "react";
import { Item, Button } from "semantic-ui-react";

const NotificationItem = ({ user }) => (
  <Item>
    <Item.Image size="mini" circular src={user.photoURL} />
    <Item.Content verticalAlign="middle">{user.name}</Item.Content>
    <Button basic color="blue" circular size="mini">
      Follow
    </Button>
  </Item>
);

export default NotificationItem;
