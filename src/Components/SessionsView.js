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
		const {RideId, RideDate, Members, Playlist} = ride;
		const {PlaylistName} = Playlist;

		let dateMomentFormat = moment(RideDate);
		const displayDate = dateMomentFormat.format("dddd, MMMM Do YYYY");
		const secondaryText = PlaylistName + ' - ' + Members.length + ' members';
		return <ListItem style={{width: "100%"}} key={RideId} primaryText={displayDate} secondaryText={secondaryText}
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