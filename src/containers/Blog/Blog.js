import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Register from "../../containers/Blog/Register/Register";
import Posts from "../Posts/Posts";
import Login from "../../containers/Blog/Login/Login";
import "./Blog.css";
import asyncComponent from "../../hoc/asyncComponent";
import Aux from "../../hoc/Aux/Aux";

//import FullPost from "../Blog/FullPost/FullPost";
//import Posts from "../Posts/Posts";
//import axios from "axios";
//import axios from "../../axios";
//import NewPost from "../../containers/Blog/NewPost/NewPost";

const AsynNewPost = asyncComponent(() => {
  return import("../../containers/Blog/NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <Aux>
        <div className="Blog">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/posts/"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                      color: "rgb(241, 83, 55)",
                      textDecoration: "underline",
                    }}
                  >
                    <h1>All Posts</h1>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: "/new-post",
                    }}
                    activeClassName="my-active"
                    activeStyle={{
                      color: "rgb(241, 83, 55)",
                      textDecoration: "underline",
                    }}
                  >
                    <h1>Make A Post</h1>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: "/login",
                    }}
                    activeClassName="my-active"
                    activeStyle={{
                      color: "rgb(241, 83, 55)",
                      textDecoration: "underline",
                    }}
                  >
                    <h1>Login</h1>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            {this.state.auth ? (
              <Route path="/new-post" component={AsynNewPost} />
            ) : null}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/posts" component={Posts} />

            <Redirect from="/" exact to="/Posts" />
            <Route render={() => <h1> Directory Not Found </h1>} />
          </Switch>{" "}
        </div>{" "}
      </Aux>
    );
  }
}

export default Blog;
