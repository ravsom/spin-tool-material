import React, {Component, PropTypes as T} from 'react';
import '../../App.css';
import SpinBar from './SpinAppBar';

import AuthService from '../../utils/AuthService'
import MoreMenu from './MoreMenu'

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
				{this.props.children}
			</div>
		);
	}
}

export default App;
