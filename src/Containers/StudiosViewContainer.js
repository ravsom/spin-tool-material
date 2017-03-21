/**
 * Created by rs on 20/03/17.
 */

/**
 * Created by rs on 07/01/17.
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getStudios} from '../ActionCreators/studiosActionCreator'

import StudiosListView from '../Components/view-all/StudiosListView'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({getStudios, dispatch}, dispatch);
};

const mapStateToProps = (state) => {
	return {
		studios: state.studios.get("studios")
	}
};
const StudiosListViewContainer = connect(mapStateToProps, mapDispatchToProps)(StudiosListView);
export default StudiosListViewContainer;