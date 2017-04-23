import React, {Component} from 'react';

import RootUIComponent from './RootUIComponent'

class LoginComponent extends Component {

	render() {
		return <RootUIComponent {...this.props}>
			<div style={{marginTop: "100px"}}>
				Welcome, you have been signed in!
			</div>
		</RootUIComponent>
	}
}

export default LoginComponent;