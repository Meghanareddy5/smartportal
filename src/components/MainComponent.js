import React, { Component } from 'react';
import {Switch , Route, Redirect, withRouter} from 'react-router-dom';
import Header from './Navigation';
import Products from './ProductComponent';
import {connect} from 'react-redux';
import { fetchProducts } from '../redux/ActionCreators';
import Dashboard from './Dashboard';
import {BootstrapTable, 
  TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../App.css';

const mapStateToProps = state => {
    return{
  users:state.users,
  username:state.username,
  shows:state.shows
    
    }       
  }
  const mapDispatchToProps= dispatch=>({    
    fetchProducts:()=>{dispatch(fetchProducts())}
  });

class Main extends Component {
    constructor(props){
      super(props);
 
    }
    componentDidMount(){
        this.props.fetchProducts();
        this.setState({
          username: this.props.username
      });  
    }
    render() {
      const ProductPage =  ({match}) => {
        return(
            <Products  showLoading={this.props.shows.isLoading} shows={this.props.shows.shows.filter((show) => show.assigned == this.props.username)} />
        );
    }
const HomeMainPage=()=>{
  return(
    <Dashboard />
  )
}

        const HomePage = () => {
          return(
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12"> 
                    {this.props.shows.shows.map((show) =>{
                return(       

                  <tr key={show.prodId} >
                   <td>{show.prodname}</td>
                   <td>{show.Episode}</td>
                   <td>{show.assigned}</td>
                   <td>{show.status}</td>
                 
                   </tr> 
                ); 
            })}
                    </div>
                </div>
            </div>
        );
        }
    return (
        <div className="container">
        <Header username={this.props.username}/> 
      
        <Switch>
       <Route exact path="/home" component={HomeMainPage}/>
       <Route path="/products" component={HomePage}/>
       <Route exact path="/products/:username" component={ProductPage}/>
       <Redirect to="/home" />
       </Switch>
        </div>
    );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));