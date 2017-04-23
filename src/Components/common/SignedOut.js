import React, {Component} from 'react';

class SignedOut extends Component {

	render() {
		console.log('signed out called.');
		return <div style={{marginTop: "100px"}}>
			You have been signed out.
		</div>
	}
}

export default SignedOut;