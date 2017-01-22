/**
 * Created by rs on 28/10/16.
 */

import * as display from './displayState'
import * as sessions from './rideSessions'
import * as riders from './ridersReducer'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'


export const combinedReducers = combineReducers(
	{...display, ...sessions, ...riders, routing: routerReducer}
);
