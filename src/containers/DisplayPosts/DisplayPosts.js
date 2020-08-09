
import "./DisplayPosts.css";


import React, { Component } from 'react'

export default class DisplayPosts extends Component {
  render() {
    return (
      <div>
        <div className="Post">
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <div className="Title"> {this.props.Title} </div>{" "}
          <div className="Content"> {this.props.Content} </div>{" "}
          <div className="Author"> {this.props.Author} </div>


        </div></div>

    )
  }
}


