/**
 * Created by rs on 08/01/17.
 */
import React, {Component} from 'react'
import SpinAppBar from './SpinAppBar'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {redirect} from '../../utils/utils'
class AddAsset extends Component {

	render() {
		return (
			<div>
				<SpinAppBar
					title={this.props.assetTitle}
					iconElementLeft={<IconButton><NavigationClose /></IconButton>}
					leftIconClicked={() => {
						console.log(this.props.onCloseRedirect !== null)
						redirect(this.props.dispatch, this.props.onCloseRedirect)
					}}
				/>
			</div>
		)
	}
}


export default AddAsset