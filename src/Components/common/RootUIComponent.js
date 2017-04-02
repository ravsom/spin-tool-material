import React, {Component, PropTypes as T} from 'react';
import '../../App.css';
import SpinBar from './SpinAppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import {redirect} from '../../utils/utils'
import Content from './ContentComponent'

import AuthService from '../../utils/AuthService'


const loggedInMenu = (props, auth) => {
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
}
const MoreMenu = (props) => {
	const auth = props.routes[0].auth;
	const isLoggedIn = auth.loggedIn();
	console.log('RootUIComponent: is logged in->' + isLoggedIn);
	return <IconMenu
		{...props}
		iconButtonElement={
			<IconButton><MoreVertIcon /></IconButton>
		}
		targetOrigin={{horizontal: 'right', vertical: 'top'}}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	>

		{isLoggedIn ? loggedInMenu(props, auth) :
			<MenuItem primaryText="Sign In" onTouchTap={() => props.login(auth)}/>
		}
	</IconMenu>
};

class App extends Component {

	static contextTypes = {
		router: T.object
	};

	static propTypes = {
		location: T.object,
		auth: T.instanceOf(AuthService)
	};

	render() {

		const title = "Spin ON! - " + this.props.title;
		return (
			<div style={{display: "flex", flexDirection: "column", height: "100%", position: "absolute", width: "100%"}}>

				<SpinBar
					title={title}
					showMenuIconButton={false}
					iconElementRight={<MoreMenu {...this.props}/>}
				/>
				<Content {...this.props}>
					{this.props.children}
				</Content>
			</div>
		);
	}
}

export default App;
