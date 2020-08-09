import React, { Component } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";
import DisplayPosts from "../DisplayPosts/DisplayPosts";
import Button from "../../components/UI/Button/Button";
import "./Posts.css";
import axios2 from "../../axios2";
class Posts extends Component {
  state = {
    results: [],
    comment: "",
    comments: [],
  };

  handlechange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handlesubmit = (e) => {
    this.componentDidMount();
    {
      const Data = {
        comment: this.state.comment, //
      };

      e.preventDefault();
      axios2.post(`/data.json`, Data).then((res) => {
        console.log(res);
      });
    }
  };

  componentDidMount() {
    axios2.get(`/data.json`).then((response) => {
      //

      const fetched = [];
      for (let key in response.data) {
        fetched.push({
          ...response.data[key],
          id: key,
        });
      }
      this.setState({ comments: fetched });
      console.log(fetched);
    });
  }

  componentDidMount() {
    axios.get("/posting.json").then((response) => {
      console.log(response.data);
      const fetchedResults = [];
      for (let key in response.data) {
        fetchedResults.unshift({
          ...response.data[key],
          id: key,
        });
      }
      this.setState({
        results: fetchedResults,
      });
    });
  }

  postSelectedHandler = (id) => {
    // this.props.history.push({pathname: '/posts/' + id});
    this.props.history.push("/posts/" + id);
  };
  render() {
    return (
      <div>
        <div className="Posts">
          {this.state.results.map((result) => (
            <DisplayPosts
              key={result.id}
              Title={result.Title}
              Content={result.Content}
              Author={result.Author}
              clicked={() => this.postSelectedHandler(result.id)}
            />
          ))}
        </div>

        <div className="comment">
          <form onSubmit={this.handlesubmit}>
            <input
              class="styles"
              value={this.state.comment}
              placeholder="Add a Comment"
              name="comment"
              onChange={this.handlechange}
            />

            <button className="Styling">Comment</button>
          </form>

          <hr />

          <div className="border">
            <ul className="overf">
              {this.state.comments.reverse().map((com) => {
                console.log("hello", com.comment);
                return (
                  <div>
                    <li key={com.id}> {com.comment}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Posts;
