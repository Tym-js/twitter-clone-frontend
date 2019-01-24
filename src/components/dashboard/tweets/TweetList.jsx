import React from "react"
import { Segment } from "semantic-ui-react"
import TweetItem from "./TweetItem.jsx"

class TweetList extends React.Component {
  render() {
    const { posts } = this.props
    return (
      <Segment.Group>
        {posts.map(post => (
          <TweetItem key={post.id} tweet={post} />
        ))}
      </Segment.Group>
    )
  }
}

export default TweetList
