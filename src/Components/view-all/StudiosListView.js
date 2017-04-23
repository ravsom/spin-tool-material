/**
 * Created by rs on 07/01/17.
 */
/**
 * Created by rs on 07/01/17.
 */
import React, {Component} from 'react'

import ListView from '../common/ListView'
import {ListItem} from 'material-ui/List'
import Content from '../../Components/common/ContentComponent'
import TextField from 'material-ui/TextField'
import {redirect} from '../../utils/utils'
class StudiosListView extends Component {

	componentDidMount() {
		this.props.getStudios();
	}

	render() {
		return (
			<Content {...this.props}>

				<TextField
					hintText="Text" floatingLabelText="Search"
					style={{width: "100%", paddingRight: "30px", paddingLeft: "10px"}}/>
				<ListView>
					{
						this.props.studios.map((studio) => {
							return <ListItem onTouchTap={(event) => redirect(this.props.dispatch, '/studio-update/' + studio.id)}
															 key={studio.id}
															 primaryText={studio.name}/>
						})
					}

				</ListView>
			</Content>
		)
	}
}

export default StudiosListView