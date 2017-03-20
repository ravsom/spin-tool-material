import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MemberOne from '../Components/one/MemberOne'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({dispatch}, dispatch);
};

const mapStateToProps = (state, ownProps) => {
	const memberId = ownProps.params.id;

	const members = state.members.get("members");
	const member = members.find(member => member.id === memberId);
	return {
		member
	}
};

const MemberViewOneContainer = connect(mapStateToProps, mapDispatchToProps)(MemberOne);
export default MemberViewOneContainer;
