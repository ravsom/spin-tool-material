import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StudioUpdate from '../Components/one/StudioOne'
import {updateStudio} from '../ActionCreators/studiosActionCreator'


const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({dispatch, updateStudio}, dispatch);
};

const mapStateToProps = (state, ownProps) => {
	const studioId = ownProps.params.id;
	const studios = state.studios.get("studios");
	const studio = studios.find(studio => studio.id === studioId);
	return {
		studio
	}
};

const StudioUpdateContainer = connect(mapStateToProps, mapDispatchToProps)(StudioUpdate);
export default StudioUpdateContainer;
