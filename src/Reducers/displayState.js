/**
 * Created by rs on 07/01/17.
 */
import {Map} from 'immutable';

const display = (state = Map({tabSliderIndex: 0}), action) => {
	switch (action.type) {
		case 'SLIDER_UPDATE':
			return state.set('tabSliderIndex', action.value);
		default:
			return state;
	}
};

export {display};