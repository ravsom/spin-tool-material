/**
 * Created by rs on 07/01/17.
 */
/**
 * Created by rs on 07/01/17.
 */


import React, {Component} from 'react'

import ListView from './ListView'
import PersonOutline from 'material-ui/svg-icons/social/person-outline'
import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'


class UsersView extends Component {

	componentDidMount() {
		this.props.getRiders();
	}

	getRider(rider) {
		const {FirstName, LastName, UserId} = rider;
		return <ListItem key={UserId} primaryText={FirstName} secondaryText={LastName}
										 leftAvatar={<Avatar><PersonOutline/></Avatar>} secondaryTextLines={2}/>
	}

	render() {
		return (
			<ListView>
				{this.props.riders ? this.props.riders.map(rider => this.getRider(rider)) : null}
			</ListView>
		)
	}
}

export default UsersView