/**
 * Created by rs on 08/01/17.
 */

import React, {Component} from 'react'
import AddAsset from './AddAsset'
import muiTheme from './muitheme'

import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import Chip from 'material-ui/Chip'
import RaisedButton from 'material-ui/RaisedButton'

import AutoComplete from 'material-ui/AutoComplete'

import {List} from 'immutable'
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

class SessionAdd extends Component {

	constructor(props) {
		super(props);

		const defaultDate = new Date();

		this.state = {
			sessionDate: defaultDate,
			selectedMembers: List(),
			searchText: ''
		};
	}

	handleRequestDelete(member) {
		console.log('member is : ' + member);
		let {selectedMembers} = this.state;
		selectedMembers = selectedMembers.remove(selectedMembers.indexOf(member));

		console.log('selectedmembers: ' + JSON.stringify(selectedMembers));
		this.setState({selectedMembers})
	}

	getChildContext() {
		return muiTheme
	}

	handleTouchTap() {
		// alert('You clicked the Chip.');
	}


	render() {

		const {fuzzyFilter} = AutoComplete;
		return (
			<div style={styles.rootContainerStyle}>
				<AddAsset title="Add Session" {...this.props} />
				<div style={styles.formContainer}>
					<div style={styles.formStyle}>
						<div style={styles.formCenterStyle}>
							<DatePicker floatingLabelText="Ride Date" hintText="Ride date"
													defaultDate={this.state.sessionDate}/>

							<TimePicker floatingLabelText="Ride Time" hintText="Ride Time" defaultTime={this.state.sessionDate}/>

							{this.state.selectedMembers ?
								<div style={{display: "flex", flexWrap: "wrap"}}>
									{this.state.selectedMembers.map(member =>
										<Chip key={member}
													onRequestDelete={this.handleRequestDelete.bind(this, member)}
													onTouchTap={this.handleTouchTap.bind(this, member)}
													style={{margin: 4}}>
											{member}
										</Chip>)
									}
								</div>
								: null}

							<AutoComplete ref="membersWidget" dataSource={["Anuj", "Sailesh"]} floatingLabelText="Search Riders"
														onNewRequest={(chosenRequest) => {
															this.refs.membersWidget.searchText = '';
															this.setState({selectedMembers: this.state.selectedMembers.push(chosenRequest)});
															this.setState({searchText: ''});
														}}
														searchText={this.state.searchText}
														onUpdateInput={(t) => {
															this.setState({searchText: t});
														}}
														filter={(searchText, key) => key.toLowerCase().includes(searchText.toLowerCase())}
							/>

							<AutoComplete dataSource={["RPM71", "RPM73"]} floatingLabelText="Playlist"
														filter={fuzzyFilter} maxSearchResults={5}/>

							<RaisedButton primary={true} label="Submit" fullWidth={true}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

SessionAdd.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default SessionAdd