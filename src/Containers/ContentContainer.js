/**
 * Created by rs on 07/01/17.
 */

import {bindActionCreators} from 'redux';
import {updateSlider} from '../ActionCreators/displayActionCreator'
import {connect} from 'react-redux';

import Content from '../Components/Content'

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({updateSlider}, dispatch);
};

const mapStateToProps = (state) => {
	return {
		tabSliderIndex: state.default.get("tabSliderIndex")
}
};
const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);
export default ContentContainer;