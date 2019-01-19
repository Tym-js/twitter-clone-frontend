import React from "react"
import { Segment } from "semantic-ui-react"
import TweetItem from "./TweetItem.jsx"

class TweetList extends React.Component {
  render() {
    const { tweets } = this.props
    return (
      <Segment.Group>
        {tweets.map(tweet => (
          <TweetItem key={tweet.id} tweet={tweet} />
        ))}
      </Segment.Group>
    )
  }
}

export default TweetList
