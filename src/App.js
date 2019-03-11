import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store =ConfigureStore();

class App extends Component {

  componentWillMount(){
    var loginPage =[];
    // loginPage.push(<Loginscreen />);
    // this.setState({
    //               loginPage:loginPage
    //                 })
  }


  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
         <Login />
        </header>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
