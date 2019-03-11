import React from 'react';
import { Breadcrumb, BreadcrumbItem,  Media } from 'reactstrap';

function RenderLeader(props){
   if(props.shows!=null){
    return props.shows.map( (show) => {
        return (
            <li key={show.prodId} >
            <p>{show.prodname}</p>
            <p>{show.Episode}</p>
            <p>{show.assigned}</p>
            <p>{show.status}</p>
          
         </li>
     );    
    });
}
    else{
        return(<div></div>)
    }
}




export default RenderLeader;