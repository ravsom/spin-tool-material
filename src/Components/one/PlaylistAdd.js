/**
 * Created by rs on 08/01/17.
 */

import React, {Component} from 'react'
import AddAsset from '../common/AddAsset'
class PlaylistAdd extends Component {
	render() {
		return (
			<div>
				<AddAsset title="Add Playlist" {...this.props}/>
			</div>
		);
	}
}

export default PlaylistAdd