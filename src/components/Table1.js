import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../App.css';
import { Link } from 'react-router-dom';

 

class Table1 extends Component {

  colFormatter = (cell, row) => {
   if(cell=="Internal Users" || cell=="External Users" || cell=="Requests")
   {
return(
{cell}
);
   }
   else
    return (
      <Link to={`/products/${cell}`}>
        {cell}
      </Link>
    )
  }


  render() {
    return (
      <div>
 
         <BootstrapTable   data={this.props.data}>
          <TableHeaderColumn width="300" isKey dataField='id' dataFormat={ this.colFormatter }>>
            Requests
          </TableHeaderColumn>
          <TableHeaderColumn width="200" dataField='name' dataFormat={ this.colFormatter }>>
           <span>Internal Users</span> 
          </TableHeaderColumn>
          <TableHeaderColumn width="200" dataField='value' dataFormat={ this.colFormatter }>>
          <span>External Users</span> 
          </TableHeaderColumn>
    </BootstrapTable>  
      </div>
    );
  }
}
 
export default Table1;