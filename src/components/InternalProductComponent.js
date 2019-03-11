function Renderproducts({shows}) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12"> 
                {shows.map((show) =>{
            return(
               <li key={show.prodId} >
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

export default Renderproducts;