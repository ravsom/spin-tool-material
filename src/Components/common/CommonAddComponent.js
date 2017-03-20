import React, {Component} from 'react';

import AddAsset from './AddAsset'
import muiTheme from './muitheme'
const styles = {

	rootContainerStyle: {
		display: "flex",
		flexDirection: "column",
		position: "absolute",
		height: "100%",
		width: "100%",
		justifyContent: "flex-start"
	},
	formContainer: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "flex-start",
		marginTop: "50px"
	},
	formStyle: {
		overflow: "auto",
		display: "flex",
		position: "relative",
		justifyContent: "center",
		marginRight: "auto",
		marginLeft: "auto",
		flexShrink: 0,
		padding: 10
	},
	formCenterStyle: {
		marginLeft: "auto",
		marginRight: "auto",
		width: "100%",
		position: "relative",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	}
};

class CommonAddComponent extends Component {
	getChildContext() {
		return muiTheme
	}

	render() {
		return <div style={styles.rootContainerStyle}>
			<AddAsset {...this.props} />
			<div style={styles.formContainer}>
				<div style={styles.formStyle}>
					<div style={styles.formCenterStyle}>
						{this.props.children}
					</div>
				</div>
			</div>
		</div>
	}
}

CommonAddComponent.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};
export default CommonAddComponent;
