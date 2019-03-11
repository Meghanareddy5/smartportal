import React, { Component } from 'react';
import Table1 from './Table1';
 
var data = [
  {id: 'Shows', name: '5', value: '4'},
  {id: 'Payment Requests', name: '4', value: '5'},
  {id: 'General Requests', name: '5', value: '4'}
];
 
 
class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <p className="Table-header">Action Item for users</p>
        <Table1 data={data}/>
      </div>
    );
  }
}
export default Dashboard;