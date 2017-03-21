/**
 * Created by rs on 20/03/17.
 */
/**
 * Created by rs on 08/01/17.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import StudioAdd from '../Components/one/StudioOne'
import {addStudio} from '../ActionCreators/studiosActionCreator'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({dispatch, addStudio}, dispatch);
};

const mapStateToProps = (state) => {
	return {}
};

const StudioAddContainer = connect(mapStateToProps, mapDispatchToProps)(StudioAdd);
export default StudioAddContainer;