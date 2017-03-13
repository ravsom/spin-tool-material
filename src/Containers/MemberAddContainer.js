/**
 * Created by rs on 08/01/17.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MemberAdd from '../Components/create/MemberAdd'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({dispatch}, dispatch);
};

const mapStateToProps = (state) => {
	return {}
};

const MemberAddContainer = connect(mapStateToProps, mapDispatchToProps)(MemberAdd);
export default MemberAddContainer;