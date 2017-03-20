/**
 * Created by rs on 07/01/17.
 */
import React, {Component} from 'react'

import RootUIComponent from '../common/RootUIComponent'

class MemberViewOne extends Component {

	render() {

		return (
			<RootUIComponent onAddClickedRedirectRoute={"member-view-one"} title="Member Details" {...this.props}>
				Member View One

				{console.log("Member name:" + this.props.member.name)}
			</RootUIComponent>
		)
	}
}

export default MemberViewOne