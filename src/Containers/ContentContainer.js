/**
 * Created by rs on 07/01/17.
 */

import {bindActionCreators} from 'redux';
import {updateSlider} from '../ActionCreators/displayActionCreator'
import {getRideSessions} from '../ActionCreators/sessionsActionCreator'
import {getRiders} from '../ActionCreators/userActionCreator'
import {connect} from 'react-redux';

import Content from '../Components/Content'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({getRideSessions, getRiders, updateSlider, dispatch}, dispatch);
};

const mapStateToProps = (state) => {
	return {
		tabSliderIndex: state.display.get("tabSliderIndex"),
		rides: state.sessions.get("rides"),
		riders: state.riders.get("riders")
	}
};
const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);
export default ContentContainer;