/**
 * Created by rs on 08/01/17.
 */

import React, {Component} from 'react'
import CommonAddComponent from '../common/CommonAddComponent'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import {redirect} from '../../utils/utils'
import {ListItem} from 'material-ui/List'
import ListView from '../common/ListView'
import AddIcon from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete'

class StudioOne extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: props.studio ? props.studio.name : "",
			open: false,
		};

	}

	addStudio() {
		const studio = {
			studio: {
				name: this.state.name
			}
		};
		this.props.studio ?
			this.props.updateStudio(this.props.studio.id, studio) : this.props.addStudio(studio);

		redirect(this.props.dispatch, "/studios-view");
	}

	actions = [
		<FlatButton
			label="Cancel"
			primary={true}
			onTouchTap={() => this.handleClose()}
		/>,
		<FlatButton
			label="Submit"
			primary={true}
			keyboardFocused={true}
			onTouchTap={() => this.handleClose()}
		/>,
	];

	handleClose = () => {
		this.setState({open: false});
	};

	showDialog() {
		return <Dialog
			title="Choose Schedule"
			actions={this.actions}
			modal={false}
			open={this.state.open}
			onRequestClose={this.handleClose}
		>
			<div style={{display: "flex"}}>
				{/*AutoComplete*/}
				Day of the week
				<AutoComplete
					dataSource={["Monday", ' Tuesday', ' Wednesday', ' Thursday', ' Friday', ' Saturday', ' Sunday']}/>
				{/*TimePicker*/}
			</div>
		</Dialog>
	}

	render() {
		const title = (this.props.member ? ' Update Studio' : ' Add Studio');
		return (
			<CommonAddComponent assetTitle={title} onCloseRedirect="/studios-view" {...this.props}>
				{/*<!--Name-->*/}
				<TextField
					hintText="Tribe VR" floatingLabelText="Name"
					onChange={(newName) => this.setState({name: newName.target.value})}
					value={this.state.name}/>

				{this.showDialog()}

				<ListView>
					<ListItem onTouchTap={(event) => this.setState({open: true})} primaryText="Add a schedule"
										leftIcon={<AddIcon/>}/>
				</ListView>


				<RaisedButton primary={true} label="Submit" fullWidth={true} onTouchEnd={this.addStudio.bind(this)}
											style={{marginTop: 20}}/>

			</CommonAddComponent>
		);
	}
}

export default StudioOne