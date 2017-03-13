/**
 * Created by rs on 07/01/17.
 */

import {bindActionCreators} from 'redux';
import {getRideSessions} from '../ActionCreators/ridesActionCreator'
import {connect} from 'react-redux';

import RidesListView from '../Components/view-all/RidesListView'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({getRideSessions, dispatch}, dispatch);
};

const mapStateToProps = (state) => {
	return {
		rides: state.rides.get("rides")
	}
};
const RidesListViewContainer = connect(mapStateToProps, mapDispatchToProps)(RidesListView);
export default RidesListViewContainer;