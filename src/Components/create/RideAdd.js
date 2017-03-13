/**
 * Created by rs on 08/01/17.
 */

import React, {Component} from 'react'
import AddAsset from '../common/AddAsset'
import muiTheme from '../common/muitheme'

import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import Chip from 'material-ui/Chip'
import RaisedButton from 'material-ui/RaisedButton'

import AutoComplete from 'material-ui/AutoComplete'
import {List} from 'immutable'
import {redirect} from '../utils'

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

class SessionAdd extends Component {

	constructor(props) {
		super(props);

		const defaultDate = new Date();

		this.state = {
			rideDate: defaultDate,
			rideTime: defaultDate,
			selectedMembers: List(),
			searchText: '',
			centre: ''
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

	addSessionInfo() {
		const {rideDate, rideTime}  =this.state;
		const newConstDate = new Date(
			rideDate.getFullYear(),
			rideDate.getMonth(),
			rideDate.getDate(),
			rideTime.getHours(),
			rideTime.getMinutes()
		);
		const sessionData = {
			playlist: "da32",
			members: ["sad2", "asfs21"],
			rideDate: newConstDate.getTime(),
			centre: this.state.centre
		};
		this.props.addSession(sessionData);
		redirect(this.props.dispatch, "/");
	};

	handleDateChange(e, value) {
		console.log('date value: ' + value);
		this.setState({rideDate: value})
	}

	handleTimeChange(e, value) {
		this.setState({rideTime: value})
	}

	handleNewRequestMember(chosenRequest) {
		console.log('chosenRequest ' + chosenRequest);

		if (this.isValidMember(chosenRequest)) {
			this.setState({selectedMembers: this.state.selectedMembers.push(chosenRequest)});
			this.setState({searchText: ''});
		}
	}

	handleSetCentre(chosenRequest) {
		this.setState({centre: chosenRequest});
	}

	isValidMember(memberName) {
		console.log('memberName:' + memberName);
		return false;
	}

	render() {

		const {fuzzyFilter} = AutoComplete;
		return (
			<div style={styles.rootContainerStyle}>
				<AddAsset title="Add Session" {...this.props} />
				<div style={styles.formContainer}>
					<div style={styles.formStyle}>
						<div style={styles.formCenterStyle}>

							<AutoComplete dataSource={["Gold's Gym RMZ", "Tribe VR"]} floatingLabelText="Fitness Centre"
														filter={fuzzyFilter} maxSearchResults={5}
														onNewRequest={chosenRequest => this.handleSetCentre(chosenRequest)}/>

							<DatePicker value={this.state.rideDate} floatingLabelText="Ride Date" hintText="Ride date"
													defaultDate={this.state.rideDate}
													onChange={this.handleDateChange.bind(this)}/>

							<TimePicker value={this.state.rideTime} floatingLabelText="Ride Time" hintText="Ride Time"
													defaultTime={this.state.rideTime}
													onChange={this.handleTimeChange.bind(this)}/>

							{this.state.selectedMembers ?
								<div style={{display: "flex", flexWrap: "wrap"}}>
									{this.state.selectedMembers.map(member =>
										<Chip key={member}
													onRequestDelete={this.handleRequestDelete.bind(this, member)}
													style={{margin: 4}}>
											{member}
										</Chip>)
									}
								</div>
								: null}

							<AutoComplete ref="membersWidget" dataSource={["Anuj", "Sailesh", "Add New"]}
														floatingLabelText="Search Riders"
														onNewRequest={(chosenRequest) => this.handleNewRequestMember(chosenRequest)}
														searchText={this.state.searchText}
														onUpdateInput={(t) => {
															this.setState({searchText: t});
														}}
														filter={(searchText, key) => key.toLowerCase().includes(searchText.toLowerCase())}
							/>

							<AutoComplete dataSource={["RPM71", "RPM73"]} floatingLabelText="Playlist"
														filter={fuzzyFilter} maxSearchResults={5}/>

							<RaisedButton primary={true} label="Submit" fullWidth={true} onTouchEnd={this.addSessionInfo.bind(this)}/>
						</div>
					</div>
				</div>
			</div>
		)
			;
	}
}

SessionAdd.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default SessionAdd