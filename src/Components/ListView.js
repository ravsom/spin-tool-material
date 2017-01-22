import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import {List} from 'material-ui/List'

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
					{this.props.children}
				</List>
			</Paper>
		)
	}
}

export  default  ListView;