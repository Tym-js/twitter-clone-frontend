import React from "react"
import { Card, Image, Icon, Button } from "semantic-ui-react"

class User extends React.Component {
  render() {
    return (
      <Card>
        <Image
          size="big"
          src={"https://randomuser.me/api/portraits/men/20.jpg"}
        />
        <Card.Content />
      </Card>
    )
  }
}
