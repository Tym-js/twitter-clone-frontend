import React from "react"
import { Icon } from "semantic-ui-react"

const HomePage = ({ history }) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <div className="content">
              {" "}
              <Icon size="large" name="comment alternate outline" />
              Posts
            </div>
          </h1>
          <h2>Twitter Clone App</h2>
          <div
            onClick={() => history.push("/tweets")}
            className="ui huge white inverted button"
          >
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>@ 2019</div>
    </div>
  )
}

export default HomePage
