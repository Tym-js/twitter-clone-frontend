import React from "react";
import { Segment } from "semantic-ui-react";
import PostItem from "./PostItem.jsx";

class TweetList extends React.Component {
  render() {
    const { posts, deletePost } = this.props;
    return (
      <Segment.Group>
        {posts.map(post => (
          <PostItem key={post.id} post={post} deletePost={deletePost} />
        ))}
      </Segment.Group>
    );
  }
}

export default TweetList;
