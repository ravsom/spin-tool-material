import React, {Component} from 'react'

import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import {redirect} from '../../utils/utils'

class MoreMenu extends Component {

	loggedInMenu(props, auth) {
		return (
			<div>
				<MenuItem primaryText="Members" onTouchTap={() => redirect(props.dispatch, 'members-view')}/>
				<MenuItem primaryText="Rides" onTouchTap={() => redirect(props.dispatch, 'rides-view')}/>
				<MenuItem primaryText="MapUsers"/>
				<MenuItem primaryText="Playlists"/>
				<MenuItem primaryText="Studios" onTouchTap={() => redirect(props.dispatch, 'studios-view')}/>
				<MenuItem primaryText="Sign Out" onTouchTap={() => {
					props.logout(auth);
					redirect(props.dispatch, '/signed-out');
				}}/>
			</div>
		)
	};

	signInMenu(dispatch, login, auth) {
		return <MenuItem primaryText="Sign In" onTouchTap={() => {
			console.log('calling sign in.');
			login(auth);
			if (auth.loggedIn()) {
				redirect(dispatch, '/rides-view');
			}
		}}/>
	};

	render() {
		const auth = this.props.routes[1].auth;
		const isLoggedIn = auth.loggedIn();
		let login = this.props.login;
		console.log('LoginComponent: is logged in->' + isLoggedIn);

		return <IconMenu
			{...this.props}
			iconButtonElement={
				<IconButton><MoreVertIcon /></IconButton>
			}
			targetOrigin={{horizontal: 'right', vertical: 'top'}}
			anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		>

			{isLoggedIn ? this.loggedInMenu(this.props, auth) : this.signInMenu(this.props.dispatch, login, auth)}
		</IconMenu>
	}
}

export default MoreMenu;