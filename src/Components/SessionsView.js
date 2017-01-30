/**
 * Created by rs on 07/01/17.
 */


import React, {Component} from 'react'

import ListView from './ListView'
import Avatar from 'material-ui/Avatar'
import AccountBalance from 'material-ui/svg-icons/action/account-balance'
import {ListItem} from 'material-ui/List'
import moment from 'moment'


class SessionsView extends Component {

	componentDidMount() {
		this.props.getRideSessions();
	}

	getListItem(ride) {
		const {rideId, datetime, members, playlist} = ride;
		const {playlistName} = playlist;

		let dateMomentFormat = moment(datetime);
		const displayDate = dateMomentFormat.format("dddd, MMMM Do YYYY");
		const secondaryText = playlistName + ' - ' + members.length + ' members';
		return <ListItem key={rideId} primaryText={displayDate} secondaryText={secondaryText}
										 leftAvatar={<Avatar><AccountBalance/></Avatar>} secondaryTextLines={2}/>
	}

	render() {
		return (
			<ListView>
				{this.props.rides ? this.props.rides.map(ride => this.getListItem(ride)) : null}
			</ListView>
		)
	}
}

export default SessionsView