/**
 * Created by rs on 20/03/17.
 */

import {Map, List} from 'immutable';

export const studios = (state = Map({studios: Map()}), action) => {
	switch (action.type) {
		case "ADD_STUDIO_S":
			const studioList = state.get('studios').push(action.result.data.body);
			return state.set('studios', studioList);
		case "REQ_GET_STUDIOS_SUCCESS":
			const studios = List(action.result.data.body);
			return state.set('studios', studios);
		case "ADD_STUDIO_F":
		case "ADD_STUDIO":
		case "REQ_GET_STUDIOS":
		case "REQ_GET_STUDIOS_FAILURE":
		default:
			return state;
	}
};