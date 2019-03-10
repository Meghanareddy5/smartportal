import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      loginPage:[],
 
    }
  }
  componentWillMount(){
    var loginPage =[];
    // loginPage.push(<Loginscreen />);
    // this.setState({
    //               loginPage:loginPage
    //                 })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Login />
        </header>
      </div>
    );
  }
}

export default App;
