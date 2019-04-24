import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Swal from 'sweetalert2'
import {Animated} from "react-animated-css";
import { Button, Form, FormGroup, Label, Input, FormText,Container, Row, Col } from 'reactstrap';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  constructor(props){
    super();
    this.submitData = this.submitData.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state={
      name:null,
      password:null,
    }
  }
  submitData=()=> {
    if(this.state.name != null && this.state.password != null){
       Swal.fire({
        title: `${this.state.name} you have logged in successfully`,
        animation: false,
        type: 'success',
        customClass: {
          popup: 'animated tada'
        }
      }).then((result) => {
        if(result){
          window.location.href="/"
        }
      })
    }else{
      Swal.fire({
        title: `Incorrect Username or Password`,
        animation: false,
        type: 'danger',
        customClass: {
          popup: 'animated tada'
        }
      }).then((result) => {
        if(result){
          window.location.href="/"
        }
      })
    }
  }
  onChange=e=>{
    switch(e.target.name) {
      case "name":
      this.setState({
        name:e.target.value
      })
      break;
      case "password":
      this.setState({
        password:e.target.value
      })
      break;
      default:
      break;
    }
  }

  render() {
     const divStyle = {
      margin: '6%',
    };
     const formLabelStyle = {
       width: '200px',
       margin: 'auto'
    };
    return (
      <div className="home-default-page">
        <header className="app-header">
          <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
            <h1 className="app-title">Welcome to my app</h1>
          </Animated>
        </header>
        <div style={divStyle}>
          <Animated animationIn="bounce" animationOut="fadeOut" isVisible={true}>
            <h1>Login</h1>
          </Animated>
          <hr/>
          <Container>
          <Form>
            <FormGroup>
              Name :
              <Input type="name" name="name" id="name" placeholder="Enter name" style={formLabelStyle} onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
              Password :
              <Input type="password" name="password" id="password" placeholder="Enter password" style={formLabelStyle} onChange={this.onChange}/>
            </FormGroup>
            <Button onClick={this.submitData} color="success">Log In</Button>
          </Form>
          </Container>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
