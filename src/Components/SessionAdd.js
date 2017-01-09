/**
 * Created by rs on 08/01/17.
 */

import React, {Component} from 'react'
import AddAsset from './AddAsset'
import Paper from 'material-ui/Paper'
import muiTheme from './muitheme'

import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import Chip from 'material-ui/Chip'

import AutoComplete from 'material-ui/AutoComplete'
const styles = {
	rootContainerStyle: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		position: "absolute",
		width: "100%",
		justifyContent: "center"
	},
	paperContainerStyle: {
		display: "flex",
		width: "100%",
		height: "100%",
		margin: "auto"
	},
	paperStyle: {
		width: "100%",
		height: "100%",
		display: "flex",
		margin: "auto",
		padding: "10px",
		flexDirection: "column"
	}
}

class SessionAdd extends Component {

	constructor(props) {
		super(props);

		const defaultDate = new Date();

		this.state = {
			sessionDate: defaultDate
		};
	}

	handleRequestDelete() {
		alert('You clicked the delete button.');
	}

	getChildContext() {
		return muiTheme
	}

	handleTouchTap() {
		alert('You clicked the Chip.');
	}


	render() {

		const {fuzzyFilter} = AutoComplete;
		return (
			<div style={styles.rootContainerStyle}>
				<AddAsset title="Add Session" {...this.props}/>
				<div style={styles.paperContainerStyle}>
					<Paper style={styles.paperStyle} zDepth={1}>
						<DatePicker floatingLabelText="Ride Date" hintText="Ride date"
												defaultDate={this.state.sessionDate}/>

						<TimePicker floatingLabelText="Ride Time" hintText="Ride Time" defaultTime={this.state.sessionDate}/>

						<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
							<Chip
								onRequestDelete={this.handleRequestDelete}
								onTouchTap={this.handleTouchTap}
								style={{margin: 4}}
							>
								Deletable Text Chip
							</Chip>
							<AutoComplete dataSource={["Anuj", "Sailesh"]} floatingLabelText="Search Riders"/>
						</div>

						<AutoComplete dataSource={["RPM71", "RPM73"]} floatingLabelText="Playlist"
													filter={fuzzyFilter} maxSearchResults={5}/>
					</Paper>
				</div>
			</div>
		);
	}
}

SessionAdd.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default SessionAdd