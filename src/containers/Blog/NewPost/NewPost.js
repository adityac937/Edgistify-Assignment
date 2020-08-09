import React, { Component } from "react";
import "./NewPost.css";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
//import Aux from "../../../hoc/Aux/Aux";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../../hoc/axios";
import Inputing from "../../../components/UI/Inputing/Inputing";

class Register extends Component {
  state = {
    postingForm: {
      Title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Content Title",
        },
        value: "",
        validation: {
          required: true,
        },
        isValid: false,
      },
      Content: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Content",
        },
        value: "",
        validation: {
          required: true,
        },
        isValid: false,
      },

      Author: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name to be published",
        },
        value: "",
        validation: {
          required: true,
        },
        isValid: false,
      },
    },
    loading: false,
  };
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const formData = {};
    for (let formElementIdentifier in this.state.postingForm) {
      formData[formElementIdentifier] = this.state.postingForm[
        formElementIdentifier
      ].value;
    }
    // const order = {
    //   postdata: formData,
    //   , order
    // };
    axios
      .post("/posting.json", formData)
      .then((res) => {
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
      });
  };

  loginHandler = (event) => {
    this.setState({
      loading: true,
    });
    event.preventDefault();
    this.props.history.push("/register");
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== " " && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }
  inputChangedHandler = (event, inputIdentifier) => {
    event.preventDefault();
    const updatedOrderForm = {
      ...this.state.postingForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    console.log(updatedFormElement);
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({
      postingForm: updatedOrderForm,
    });
  };
  
  render() {
    const formElementsArray = [];
    for (let key in this.state.postingForm) {
      formElementsArray.push({
        id: key,
        config: this.state.postingForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {" "}
        {formElementsArray.map((formElement) => (
          <Inputing
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="Success"> Post </Button>
        <div>
          <Link to="/register">
            <h1>Sign Up first</h1>
            <button btnType="Success"> Sign up </button>
          </Link>
        </div>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div class="ContactData">
        <h1> HAVE YOUR SAY ABOUT EDGISTIFY </h1> {form}
      </div>
    );
  }
}
export default Register;

// import React, { Component } from "react";
// import axios from "axios";
// import "./NewPost.css";
// import { Redirect, Link } from "react-router-dom";
// import Button from "../../../components/UI/Button/Button";

// class NewPost extends Component {
//   state = {
//     title: " ",
//     content: " ",
//     author: " ",
//     submitted: false,
//   };
//   postdataHandler = () => {
//     const data = {
//       title: this.state.title,
//       body: this.state.content,
//       author: this.state.author,
//     };
//     axios.post("/posts", data).then((response) => {
//       console.log(response);
//       this.props.history.replace("/posts");
//       // this.setState({ submitted: true });
//     });
//   };

//   componentDidMount() {
//     //If unath => this.props.history.replace("/posts");
//     console.log(this.props);
//   }
//   render() {
//     let redirect = null;
//     if (this.state.submitted) {
//       redirect = <Redirect to="/posts" />;
//     }
//     return (
//       <div className="NewPost">
//         {redirect}
//         <h1 class="Color">Create Your Say about Edgistify</h1>
//         <label>TITLE FOR YOUR POST</label>
//         <textarea
//           rows="5"
//           type="text"
//           value={this.state.title}
//           onChange={(event) => this.setState({ title: event.target.value })}
//         />
//         <label>ENTER SOME CONTENT</label>
//         <textarea
//           rows="8"
//           value={this.state.content}
//           onChange={(event) => this.setState({ content: event.target.value })}
//         />
//         <label>NAME TO BE PUBLISHED ON POST</label>
//         <textarea
//           rows="3"
//           type="text"
//           vvalue={this.state.author}
//           onChange={(event) => this.setState({ author: event.target.value })}
//         />
//         <Link to="/Posts">
//           <Button onClick={this.postdataHandler}>Add Post</Button>
//         </Link>
//       </div>
//     );
//   }
// }

// export default NewPost;
