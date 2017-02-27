import React, {Component} from 'react';
import '../App.css';
import SpinBar from './SpinAppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';

import Content from '../Containers/ContentContainer'

const MoreMenu = (props) => {
	return <IconMenu
		{...props}
		iconButtonElement={
			<IconButton><MoreVertIcon /></IconButton>
		}
		targetOrigin={{horizontal: 'right', vertical: 'top'}}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	>
		<MenuItem primaryText="Users"/>
		<MenuItem primaryText="MapUsers"/>
		<MenuItem primaryText="Playlists"/>
		<MenuItem primaryText="Centres"/>
		<MenuItem primaryText="Sign Out"/>
	</IconMenu>
};

class App extends Component {


	render() {
		return (
			<div style={{display: "flex", flexDirection: "column", height: "100%", position: "absolute", width: "100%"}}>

				<SpinBar
					title="Spin ON!"
					showMenuIconButton={false}
					iconElementRight={<MoreMenu/>}
				/>
				<Content/>
			</div>
		);
	}
}
export default App;
