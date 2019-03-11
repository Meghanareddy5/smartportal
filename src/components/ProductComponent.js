import React from 'react';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const ProductDetails =(props)   =>{
   
        if(props.showLoading){
            return(
                <div className="container">
                <div className="row">            
                    <Loading />
                </div>
              </div>
            );
        }
else{
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
    
                    <BreadcrumbItem><Link to="/products">Products</Link></BreadcrumbItem>
                     <BreadcrumbItem active>{props.shows.id} requests</BreadcrumbItem> 
                </Breadcrumb>
                             
            </div>
            <div className="row">
                <div className="col-4">
                           
                    <Renderproducts shows={props.shows}/>
                </div>
               
                
            </div>       
            </div>
        );  
        }

}


function Renderproducts({shows}) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12"> <h4>to show working</h4>
                {shows.map((show) =>{
            return(
               <li key={show.prodId} >
               <p>work</p>
               <p>{show.prodname}</p>
               <p>{show.Episode}</p>
               <p>{show.assigned}</p>
               <p>{show.status}</p>
             
            </li>
            ); 
        })}
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;