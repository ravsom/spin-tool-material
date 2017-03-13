/**
 * Created by rs on 28/10/16.
 */

import * as sessions from './rideSessions'
import * as riders from './membersReducer'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'


export const combinedReducers = combineReducers(
	{...sessions, ...riders, routing: routerReducer}
);
