/**
 * Created by rs on 07/01/17.
 */
/**
 * Created by rs on 07/01/17.
 */


import React, {Component} from 'react'

import ListView from '../common/ListView'
import {ListItem} from 'material-ui/List'
import RootUIComponent from '../../Components/common/RootUIComponent'
import TextField from 'material-ui/TextField'
import {redirect} from '../../utils/utils'

class MemberListView extends Component {

	componentDidMount() {
		this.props.getMembers();
	}

	render() {
		return (
			<RootUIComponent title="Members" onAddClickedRedirectRoute="member-add" {...this.props}>

				<TextField
					hintText="Text" floatingLabelText="Search"
					style={{width: "100%", paddingRight: "30px", paddingLeft: "10px"}} />
				<ListView>
					{
						this.props.members.map((member) => {
							return <ListItem onTouchTap={(event) => redirect(this.props.dispatch, 'member-view-one/' + member.id)}
															 key={member.id}
															 primaryText={member.name} secondaryText={member.phoneNumber}
															 secondaryTextLines={2}/>
						})
					}

				</ListView>
			</RootUIComponent>
		)
	}
}

export default MemberListView