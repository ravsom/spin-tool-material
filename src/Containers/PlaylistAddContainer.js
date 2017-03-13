/**
 * Created by rs on 08/01/17.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import PlaylistAdd from '../Components/create/PlaylistAdd'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({dispatch}, dispatch);
};

const mapStateToProps = (state) => {
	return {}
};
const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(PlaylistAdd);
export default PlaylistContainer;