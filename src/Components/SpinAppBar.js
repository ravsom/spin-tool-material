/**
 * Created by rs on 08/01/17.
 */

import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import muiTheme from './muitheme'

class SpinAppBar extends Component {

	getChildContext() {
		return muiTheme;
	}

	render() {
		return (
			<AppBar title={this.props.title}
							showMenuIconButton={this.props.showMenuIconButton}
							iconElementLeft={this.props.iconElementLeft}
							iconElementRight={this.props.iconElementRight}
							onLeftIconButtonTouchTap={this.props.leftIconClicked}
							onRightIconButtonTouchTap={this.props.rightButtonClicked}
			/>
		)
	}
}

SpinAppBar.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
	title: React.PropTypes.string,
	leftIconClicked: React.PropTypes.func,
	rightButtonClicked: React.PropTypes.func
};

export default SpinAppBar