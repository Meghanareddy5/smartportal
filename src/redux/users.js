import * as ActionTypes from './ActionTypes';

export const Users = (state = 
    { isLoading: true,
    errMess: null,
    users:''
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_USER:
            return {...state, isLoading: false, errMess: null, Users: action.payload};

        default:
            return state;
    }
};