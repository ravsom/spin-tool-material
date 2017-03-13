/**
 * Created by rs on 08/01/17.
 */

import React, {Component} from 'react'
import AddAsset from '../common/AddAsset'
class MemberAdd extends Component {
	render() {
		return (
			<div>
				<AddAsset onCloseRedirect="members-view" title="Add User" {...this.props}/>
			</div>
		);
	}
}

export default MemberAdd