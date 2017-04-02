/**
 * Created by rs on 22/01/17.
 */

/**
 * Created by rs on 15/01/17.
 */


import {Map} from 'immutable';

const members = (state = Map({'members': Map(), 'loggedin': false}), action) => {
	switch (action.type) {
		case 'AUTH0_LOGIN':
			console.log('user logged in');
			return state.set('loggedin', true);
		case 'AUTH0_LOGOUT':
			console.log('user logged out');
			return state.set('loggedin', false);
		case 'REQ_GET_MEMBERS_SUCCESS':
			if (action.result.data.body)
				return state.set('members', action.result.data.body);
			return state;
		case 'ADD_MEMBER_S':
		case 'UPDATE_MEMBER_S':
			if (!action.result.data.body) return state;
			const memberList = state.get('rides').push(action.result.data.body);
			return state.set('members', memberList);
		case 'REQ_GET_MEMBERS_FAILURE':
		case 'ADD_MEMBER':
		case 'UPDATE_MEMBER':
		case 'ADD_MEMBER_F':
		case 'UPDATE_MEMBER_F':
		case 'REQ_GET_MEMBERS':
		default:
			return state;
	}
};

export  {members};