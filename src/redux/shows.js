import * as ActionTypes from './ActionTypes';

export const Shows = (state = 
    { isLoading: true,
    errMess: null,
    shows:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS:
            return {...state, isLoading: false, errMess: null, shows: action.payload};
            case ActionTypes.PRODUCT_LOADING:
            return {...state, isLoading: true, errMess: null, shows:[]}; 

        default:
            return state;
    }
};