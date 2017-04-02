import React, {Component} from 'react';
import RootUIComponent from './RootUIComponent'

class SignedOut extends Component {

	render() {
		return <RootUIComponent {...this.props}>
			You have been signed out.
		</RootUIComponent>
	}
}

export default SignedOut;