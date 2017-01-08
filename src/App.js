import React, {Component} from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import BaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Content from './Containers/ContentContainer'
class App extends Component {

	getChildContext() {
		return {
			muiTheme: getMuiTheme(BaseTheme)
		}
	}



	render() {
		return (
			<div style={{display: "flex", flexDirection: "column", height: "100%", position: "absolute", width: "100%"}}>

				<AppBar
					title="Spin ON!"
					showMenuIconButton={false}
				/>
				<Content/>
			</div>
		);
	}
}

App.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

export default App;
