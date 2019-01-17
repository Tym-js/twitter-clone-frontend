import React from "react"
import { Menu, Icon, Container, Input, Image, Button } from "semantic-ui-react"

const Navbar = () => (
  <Menu>
    <Container>
      <Menu.Item header>
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item header>
        <Icon name="bell" />
        Notifications
      </Menu.Item>
      <Menu.Item header>
        <Icon name="mail" />
        Messages
      </Menu.Item>

      <Menu.Item position="right">
        <Input
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search..."
        />
      </Menu.Item>
      <Menu.Item>
        <Image
          circular
          size="mini"
          src="https://randomuser.me/api/portraits/men/20.jpg"
        />
      </Menu.Item>
      <Menu.Item>
        <Button circular primary content={"Tweet"} />
      </Menu.Item>
    </Container>
  </Menu>
)

export default Navbar
