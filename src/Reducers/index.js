/**
 * Created by rs on 28/10/16.
 */

import * as reducers from './displayState'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'


export const combinedReducers = combineReducers(
	{...reducers, routing: routerReducer}
);
