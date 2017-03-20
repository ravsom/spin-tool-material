/**
 * Created by rs on 12/03/17.
 */

import MemberListView from '../Components/view-all/MemberListView'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMembers} from '../ActionCreators/membersActionCreator'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({getMembers, dispatch}, dispatch);
};

const mapStateToProps = (state) => {
	return {
		members: state.members.get("members")
	}
};

const MembersListViewContainer = connect(mapStateToProps, mapDispatchToProps)(MemberListView);
export default MembersListViewContainer;