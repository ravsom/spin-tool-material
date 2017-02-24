import React, {Component} from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import SessionsView from './SessionsView'
import muiTheme from './muitheme'
import {redirect} from './utils'
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
		height: "100%",
		flexShrink: 0,
		overflow: "auto",
		width: "100%",
		justifyContent: "center",
		alignContent: "stretch"
	},

	swipeableContainer: {
		display: "flex",
		justifyContent: "center",
		height: "100%"
	}
};

class Content extends Component {

	constructor() {
		super();
		this.handleAddButtonClicked = this.handleAddButtonClicked.bind(this);
	}

	getChildContext() {
		return muiTheme;
	}

	handleChange = (value) => {
		this.props.updateSlider(value);
	};

	handleAddButtonClicked(e) {
		redirect(this.props.dispatch, "/sessions");
	}

	render() {
		return (

			<div>
				<div style={styles.swipeableContainer}>
					<div style={styles.listContainer}>
						<SessionsView {...this.props}/>
					</div>
				</div>
				<FloatingActionButton style={styles.floatingAddButton} onTouchEnd={this.handleAddButtonClicked}
															onMouseDown={this.handleAddButtonClicked}>
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