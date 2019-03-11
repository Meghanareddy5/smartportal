import React, { Component } from "react";
import {Row,Form,FormFeedback,FormGroup,Label,Input,Button,Col} from 'reactstrap';
import Main from './MainComponent';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Maggie",
      redirectToReferrer: false
 
    };
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
  }

//   login = () => {
//          this.setState({
//             redirectToReferrer: true
//         });  
//   }

  validateForm() {
    return this.state.username.length > 0 ;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit() {
    this.setState({
        redirectToReferrer: true
    });  

  }

  render() {
    if (this.state.redirectToReferrer == true) {
        return <Main username={this.state.username}/>
      }

    return (
     
        <div className="row row-content">
            <div className="col-12 col-md-9">
        <Form onSubmit={this.handleSubmit}>
        <Row className="form-group">
            <Label htmlFor="username" md={5}>User Name</Label>
            <Col md={4}>
            <input 
              type="text" id="username" name="username"
              placeholder="User Name"
              value={this.state.username}
              onChange={this.handleChange}
            />
            </Col>
          </Row>
          <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary"  disabled={!this.validateForm()}>
                                   Login
                                    </Button>
                                </Col>
         </Row>   
                                      
      
        </Form>
      </div>
      </div>
    );
  }
}

export default Login;