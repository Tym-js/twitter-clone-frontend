import React from "react"
import { Button, Header } from "semantic-ui-react"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <Header as="h1" content={"Twitter Test"} />
      <Button
        as={Link}
        to="/tweets"
        content={"Get Start"}
        style={{ margin: "30em" }}
        size="huge"
      />
    </div>
  )
}

export default HomePage
