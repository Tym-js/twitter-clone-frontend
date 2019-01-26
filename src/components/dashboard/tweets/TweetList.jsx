import React from "react"
import { Segment } from "semantic-ui-react"
import TweetItem from "./TweetItem.jsx"
import firebase from "../../../firebase"
var db = firebase.firestore()

class TweetList extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    db.collection("posts").onSnapshot(querySnapshot => {
      this.getPosts()
    })
  }

  getPosts = () => {
    let posts = []
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          posts.push({
            id: doc.id,
            content: doc.data().content,
            user: {
              name: "test",
              photoURL: ""
            }
          })
        })
      })
      .then(() => {
        this.setState({
          posts: posts
        })
      })
  }

  render() {
    return (
      <Segment.Group>
        {this.state.posts.map(post => (
          <TweetItem key={post.id} tweet={post} />
        ))}
      </Segment.Group>
    )
  }
}

export default TweetList
