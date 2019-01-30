import React from "react";
import { Segment, Item } from "semantic-ui-react";
import NotificationItem from "./NotificationItem";

const Notification = ({ users }) => (
  <Segment.Group>
    <Segment>
      <Item.Group>
        {users.map(user => (
          <NotificationItem key={user.uid} user={user} />
        ))}
      </Item.Group>
    </Segment>
  </Segment.Group>
);

export default Notification;
