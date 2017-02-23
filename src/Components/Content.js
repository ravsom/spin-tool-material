import React, {Component} from 'react';

import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import SessionsView from './SessionsView'
import UsersView from './UsersView'
import ListView from './ListView'
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
		switch (this.props.tabSliderIndex) {
			case 0:
				redirect(this.props.dispatch, "/sessions");
				break;
			case 1:
				redirect(this.props.dispatch, "/users");
				break;
			case 2:
				redirect(this.props.dispatch, "/playlists");
				break;
			default:
				return;
		}
	}

	render() {
		let {tabSliderIndex} = this.props;

		return (

			<div>
				<Tabs onChange={this.handleChange} value={tabSliderIndex}>
					<Tab label="Sessions" value={0}/>
					<Tab label="Users" value={1}/>
					<Tab label="Playlists" value={2}/>
				</Tabs>


				<div style={styles.swipeableContainer}>
					<SwipeableViews index={tabSliderIndex} onChangeIndex={this.handleChange}>
						<div style={styles.listContainer}>
							<SessionsView {...this.props}/>
						</div>
						<div style={styles.listContainer}>
							<UsersView {...this.props}/>
						</div>
						<div style={styles.listContainer}>
							<ListView/>
						</div>
					</SwipeableViews>
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