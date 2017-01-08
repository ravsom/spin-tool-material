import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import AccountBalance from 'material-ui/svg-icons/action/account-balance'

const styles = {
	listStyle: {
		marginLeft: "auto",
		marginRight: "auto",
		position: "relative",
		padding: 3,
		width: "100%"
	},
	paperStyle: {
		display: "flex",
		height: "100%",
		margin: "auto",
		width: "100%"
	}
}

class ListView extends Component {
	render() {
		return (
			<Paper style={styles.paperStyle} zDepth={3} rounded={true}>
				<List style={styles.listStyle}>
					<ListItem primaryText="08/01/2016" secondaryText="8 member - RPM 71"
										leftAvatar={<Avatar><AccountBalance/></Avatar>} secondaryTextLines={2}/>
					<ListItem primaryText="08/01/2016" secondaryText="7 member - RPM 49"
										leftAvatar={<Avatar><AccountBalance/></Avatar>}/>
				</List>
			</Paper>
		)
	}
}

export  default  ListView;