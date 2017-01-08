import React, {Component} from 'react';

import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import SessionsView from './SessionsView'
import UsersView from './UsersView'
import ListView from './ListView'

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

	handleChange = (value) => {
		this.props.updateSlider(value);
	};

	render() {
		let {tabSliderIndex} = this.props;

		console.log('Content.js.render: ' + tabSliderIndex);
		return (

			<div>
				<Tabs onChange={this.handleChange} value={tabSliderIndex}>
					<Tab label="Sessions" value={0}/>
					<Tab label="Users" value={1}/>
					<Tab label="Playlists" value={2}/>
				</Tabs>

				<FloatingActionButton style={styles.floatingAddButton} on>
					<ContentAdd />
				</FloatingActionButton>

				<div style={styles.swipeableContainer}>
					<SwipeableViews index={tabSliderIndex} onChangeIndex={this.handleChange}>
						<div style={styles.listContainer}>
							<SessionsView/>
						</div>
						<div style={styles.listContainer}>
							<UsersView/>
						</div>
						<div style={styles.listContainer}>
							<ListView/>
						</div>
					</SwipeableViews>
				</div>
			</div>
		)
	}
}
export default Content;