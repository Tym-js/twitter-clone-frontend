import React from "react"
import { Card, Image, Icon, Button } from "semantic-ui-react"

class User extends React.Component {
  render() {
    const { user } = this.props
    return (
      <Card>
        <Image size="big" src={user.photoURL} />
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>
            <span className="date">{user.joinedDate}</span>
          </Card.Meta>
          <Card.Description>{user.userDescription}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {user.friends.length} Friends
          </a>
        </Card.Content>
        <Button circular primary content={"Setting"} onClick={() => {}} />
      </Card>
    )
  }
}

export default User
