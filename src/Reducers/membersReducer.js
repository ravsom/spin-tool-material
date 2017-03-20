/**
 * Created by rs on 22/01/17.
 */

/**
 * Created by rs on 15/01/17.
 */


import {Map} from 'immutable';

const members = (state = Map({'members': Map()}), action) => {
	switch (action.type) {
		case 'REQ_GET_MEMBERS_SUCCESS':
			if (action.result.data.body)
				return state.set('members', action.result.data.body);
			return state;
		case 'REQ_GET_MEMBERS':
			return state;
		case 'REQ_GET_MEMBERS_FAILURE':
			return state.set('members', Map());
		case 'ADD_MEMBER':
			console.log('member added: ' + action);
			return state;
		case 'ADD_MEMBER_S':
			console.log('member added: success: ' + JSON.stringify(action.result.data));
			return state;
		case 'ADD_MEMBER_F':
			console.log('member added: failure: ' + JSON.stringify(action));
			return state;
		default:
			return state;
	}
};

export  {members};