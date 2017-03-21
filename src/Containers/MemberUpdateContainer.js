import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MemberOne from '../Components/one/MemberOne'
import {updateMember} from '../ActionCreators/membersActionCreator'


const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({dispatch, updateMember}, dispatch);
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
