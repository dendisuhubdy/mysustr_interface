import React from 'react'
import { Helmet } from 'react-helmet'

class YouTubeFeed extends React.Component {
  state = {
  }

  render() {
    return (
      <div>
        <Helmet title="Mysustr Camera Feed" />
        <section className="card">
          <div className="card-header">
            <div className="utils__title">
              <strong>MySustr Camera Feed</strong>
            </div>
          </div>
          <div className="card-body">
            <p> Here will be the camera feed </p>
          </div>
        </section>
      </div>
    )
  }
}

export default YouTubeFeed
