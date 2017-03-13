/**
 * Created by rs on 07/01/17.
 */
/**
 * Created by rs on 07/01/17.
 */


import React, {Component} from 'react'

import ListView from '../common/ListView'
import PersonOutline from 'material-ui/svg-icons/social/person-outline'
import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import RootUIComponent from '../../Components/common/RootUIComponent'


class MemberListView extends Component {

	componentDidMount() {
		this.props.getMembers();
	}

	render() {

		return (
			<RootUIComponent title="Members" onAddClickedRedirectRoute="member-add" {...this.props}>
				<ListView>

				</ListView>
			</RootUIComponent>
		)
	}
}

export default MemberListView