/**
 * Created by rs on 07/01/17.
 */


import React, {Component} from 'react'

import ListView from '../common/ListView'
import Avatar from 'material-ui/Avatar'
import AccountBalance from 'material-ui/svg-icons/action/account-balance'
import {ListItem} from 'material-ui/List'
import moment from 'moment'
import RootUIComponent from '../common/RootUIComponent'


class SessionsView extends Component {

	componentDidMount() {
		this.props.getRideSessions();
	}

	getListItem(ride) {
		const {id, rideDate, members, playlist} = ride;

		let dateMomentFormat = moment(rideDate);
		const displayDate = dateMomentFormat.format("dddd, MMMM Do YYYY");
		const secondaryText = playlist + ' - ' + members.length + ' members';
		return <ListItem key={id} primaryText={displayDate} secondaryText={secondaryText}
										 leftAvatar={<Avatar><AccountBalance/></Avatar>} secondaryTextLines={2}/>
	}

	render() {

		let sortedRides = this.props.rides || [];
		return (
			<RootUIComponent onAddClickedRedirectRoute="ride-add" title="Rides" {...this.props}>
				<ListView>
					{sortedRides.map(ride => this.getListItem(ride))}
				</ListView>
			</RootUIComponent>
		)
	}
}

export default SessionsView