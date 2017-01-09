/**
 * Created by rs on 08/01/17.
 */

import React, {Component} from 'react'
import AddAsset from './AddAsset'
class UserAdd extends Component {
	render() {
		return (
			<div>
				<AddAsset title="Add User" {...this.props}/>
			</div>
		);
	}
}

export default UserAdd