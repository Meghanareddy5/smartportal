import {createStore, combineReducers,applyMiddleware} from 'redux';
import { Users } from './users';
import { Shows } from './shows';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { baseUrl } from '../shared/baseUrl';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users,
            username:"Maggie",
            shows: Shows
          
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}