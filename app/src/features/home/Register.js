import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText,Container, Row, Col } from 'reactstrap';
import Swal from 'sweetalert2'
import {Animated} from "react-animated-css";


export default class Register extends Component {
  static propTypes = {
    
  };
  constructor(props) {
      super(props);
      this.submitData = this.submitData.bind(this);
      this.onChange = this.onChange.bind(this);

      this.state={
        name: null,
        surname: null,
        password:null,
        email:null,
        gender:null
      }
    }
  submitData=()=>{
    Swal.fire({
      title: `${this.state.name} you have Registered Successfully`,
      animation: false,
      customClass: {
        popup: 'animated tada'
      }
    }).then((result) => {
      if(result){
        window.location.href="/"
      }
    })
  }
  onChange=e=>{
    switch(e.target.name) {
      case "name":
      this.setState({
        name:e.target.value
      })
      break;
      case "surname":
      this.setState({
        surname:e.target.value
      })
      break;
      case "password":
      this.setState({
        password:e.target.value
      })
      break;
      case "email":
        this.setState({
        email:e.target.value
      })
      break;
      case "gender":
        this.setState({
        gender:e.target.value
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
          <h1 className="app-title"></h1>
        </header>
        <div className="app-intro">
        <div style={divStyle}>
          <Animated animationIn="bounce" animationOut="fadeOut" isVisible={true}>
              <h1>Register</h1>
          </Animated><hr/>
          <Container>
          <Form>
            <FormGroup>
              Name :
              <Input type="name" name="name" id="name" placeholder="Enter name" style={formLabelStyle} onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
              Surname :
              <Input type="surname" name="surname" id="surname" placeholder="Enter Surname" style={formLabelStyle} onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
              Email :
              <Input type="email" name="email" id="email" placeholder="Enter Email" style={formLabelStyle} onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
             Password :
              <Input type="password" name="password" id="password" placeholder="Enter Password" style={formLabelStyle} onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
              Gender :
              <Input type="select" name="gender" id="gender" style={formLabelStyle} onChange={this.onChange}>
                <option>Male</option>
                <option>Female</option>
              </Input>
            </FormGroup>
           <Button onClick={this.submitData} color="success">Submit</Button>
          </Form>
          </Container>
          </div>
          
        </div>
      </div>
    );
  }
}