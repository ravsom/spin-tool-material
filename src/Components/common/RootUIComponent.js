import React, {Component} from 'react';
import '../../App.css';
import SpinBar from './SpinAppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import {redirect} from '../utils'
import Content from './ContentComponent'

const MoreMenu = (props) => {
	return <IconMenu
		{...props}
		iconButtonElement={
			<IconButton><MoreVertIcon /></IconButton>
		}
		targetOrigin={{horizontal: 'right', vertical: 'top'}}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	>
		<MenuItem primaryText="Members" onTouchTap={() => redirect(props.dispatch, 'members-view')}/>
		<MenuItem primaryText="Rides" onTouchTap={() => redirect(props.dispatch, 'rides-view')}/>
		<MenuItem primaryText="MapUsers"/>
		<MenuItem primaryText="Playlists"/>
		<MenuItem primaryText="Studios" onTouchTap={()=>redirect(props.dispatch, 'studios-view')}/>
		<MenuItem primaryText="Sign Out"/>
	</IconMenu>
};

class App extends Component {

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
