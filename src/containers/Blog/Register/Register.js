import React, { Component } from "react";
import "./Register.css";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
//import Aux from "../../../hoc/Aux/Aux";
import { Link } from "react-router-dom";
import axios from "../../../hoc/axios";
import Input from "../../../components/UI/Input/Input";

class Register extends Component {
  state = {
    orderForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Reachable E-mail",
        },
        value: "",
        validation: {
          required: true,
        },
        isValid: false,
      },
      pwd: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Create a password",
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
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      basicInfo: formData,
    };
    axios
      .post("/info.json", order)
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
      ...this.state.orderForm,
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
      orderForm: updatedOrderForm,
    });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form class="form-input" onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        {/* <Link to="/posts">
          <button onSubmit={this.cancelling}>Cancel</button>
        </Link> */}
        <button> Submit </button>
        <div>
          <h1>
            Already a User ?
            <Link to="/login">
              <button> Login </button>
            </Link>
          </h1>
        </div>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div class="containerform">
        <h1> Enter Credentials </h1> {form}
      </div>
    );
  }
}
export default Register;
