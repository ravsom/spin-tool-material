import React, {Component} from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import ContentAdd from 'material-ui/svg-icons/content/add';

import muiTheme from './muitheme'
import {redirect} from '../../utils/utils'
import '../../index.css'
const styles = {
	headline: {
		fontSize: 24,
		marginBottom: 12,
		fontWeight: 400,
	},
	floatingAddButton: {
		bottom: 22,
		position: "fixed",
		right: 20
	},
	listContainer: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		overflow: "auto",
		marginLeft: "auto",
		marginRight: "auto",
		paddingBottom: "40px",
		paddingTop: "60px",
		width: "100%"
	},
};

class Content extends Component {

	getChildContext() {
		return muiTheme;
	}

	render() {
		return (

			<div style={{display: "flex", justifyContent: "center"}} className="LayoutBody">
				<div style={styles.listContainer}>
					{this.props.children}
				</div>
				<FloatingActionButton style={styles.floatingAddButton}
															onTouchEnd={() => redirect(this.props.dispatch, this.props.onAddClickedRedirectRoute)}
															onMouseDown={() => redirect(this.props.dispatch, this.props.onAddClickedRedirectRoute)}>
					<ContentAdd />
				</FloatingActionButton>
			</div>
		)
	}
}

Content.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default Content;