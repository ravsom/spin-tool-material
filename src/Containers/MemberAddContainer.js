/**
 * Created by rs on 08/01/17.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MemberAdd from '../Components/one/MemberOne'
import {addMember} from '../ActionCreators/membersActionCreator'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({dispatch, addMember}, dispatch);
};

const mapStateToProps = (state) => {
	return {}
};

const MemberAddContainer = connect(mapStateToProps, mapDispatchToProps)(MemberAdd);
export default MemberAddContainer;