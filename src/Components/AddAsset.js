/**
 * Created by rs on 08/01/17.
 */
import React, {Component} from 'react'
import SpinAppBar from './SpinAppBar'
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {redirect} from './utils'
class AddAsset extends Component {

	render() {
		return (
			<div>
				<SpinAppBar
					title={this.props.title}
					iconElementLeft={<IconButton><NavigationClose /></IconButton>}
					iconElementRight={<FlatButton label="Save"/>}
					rightButtonClicked={() => console.log("Save Clicked")}
					leftIconClicked={() => {
						redirect(this.props.dispatch, "/")
					}}
				/>

			</div>
		)
	}
}


export default AddAsset