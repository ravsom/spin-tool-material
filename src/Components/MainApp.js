import React, {Component} from 'react';
import '../App.css';
import SpinBar from './Components/SpinAppBar';

import Content from './Containers/ContentContainer'
class App extends Component {


	render() {
		return (
			<div style={{display: "flex", flexDirection: "column", height: "100%", position: "absolute", width: "100%"}}>

				<SpinBar
					title="Spin ON!"
					showMenuIconButton={false}
				/>
				<Content/>
			</div>
		);
	}
}
export default App;
