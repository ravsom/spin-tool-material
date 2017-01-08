/**
 * Created by rs on 07/01/17.
 */
import {Map} from 'immutable';

const displayStateReducer = (state = Map({tabSliderIndex: 0}), action) => {

	console.log('action ' + action.type + "  : value: " + action.value);
	switch (action.type) {
		case 'SLIDER_UPDATE':
			return state.set('tabSliderIndex', action.value);
		default:
			return state;
	}
};

export default displayStateReducer;