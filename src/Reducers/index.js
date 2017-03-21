/**
 * Created by rs on 28/10/16.
 */

import * as sessions from './rideSessions'
import * as members from './membersReducer'
import * as studios from './studios'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'


export const combinedReducers =
	combineReducers({...sessions, ...members, ...studios, routing: routerReducer});
