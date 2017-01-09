/**
 * Created by rs on 08/01/17.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import SessionAdd from '../Components/SessionAdd'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({dispatch}, dispatch);
};

const mapStateToProps = (state) => {
	return {}
};
const SessionAddContainer = connect(mapStateToProps, mapDispatchToProps)(SessionAdd);
export default SessionAddContainer;