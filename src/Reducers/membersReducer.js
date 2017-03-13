/**
 * Created by rs on 22/01/17.
 */

/**
 * Created by rs on 15/01/17.
 */


import {Map} from 'immutable';

const members = (state = Map({'riders': Map()}), action) => {
	switch (action.type) {
		case 'REQ_GET_RIDERS_SUCCESS':
			return state.set('members', action.result.data);
		case 'REQ_GET_RIDERS':
		case 'REQ_GET_RIDERS_FAILURE':
			return state.set('members', Map());
		default:
			return state;
	}
};

export  {members};