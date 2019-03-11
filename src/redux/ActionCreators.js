import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchProducts=()=> (dispatch)=>{
  dispatch(ProductsLoading(true));
  return fetch(baseUrl + 'shows')
        .then(response => response.json())
                  .then(products => dispatch(getProducts(products)));
}

// export const getusername=(name)=({
//     type:ActionTypes.GET_USER,
//     payload:name
// })
export const ProductsLoading=()=>({
    type:ActionTypes.PRODUCT_LOADING
})

export const getProducts=(products)=>({
    type: ActionTypes.GET_PRODUCTS,
    payload:products
})

