/**
 * Created by rs on 08/01/17.
 */

import React, {Component} from 'react'
import CommonAddComponent from '../common/CommonAddComponent'
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete'
import RaisedButton from 'material-ui/RaisedButton'

class MemberAdd extends Component {

	constructor(props) {
		super(props);

		console.log(JSON.stringify(props.member));
		this.state = {
			name: props.member ? props.member.name : "",
			whatsAppNumber: props.member ? props.member.whatsAppNumber : "",
			studio: props.member ? props.member.studio : null
		}
	}

	addMember() {
		console.log("Name: " + this.state.name);
		console.log("Whatsapp number: " + this.state.whatsAppNumber);
		console.log("studio: " + this.state.studio);

		this.props.addMember({
			member: {
				name: this.state.name,
				whatsAppNumber: this.state.whatsAppNumber,
				studio: this.state.studio
			}
		});
	}

	render() {
		const {fuzzyFilter} = AutoComplete;

		const title = (this.props.member ? 'Update Member' : 'Add Member');
		return (
			<CommonAddComponent assetTitle={title} onCloseRedirect="/members-view" {...this.props}>
				{/*<!--Name-->*/}
				<TextField
					hintText="Ravi" floatingLabelText="Name" onChange={(newName) => this.setState({name: newName.target.value})}
					value={this.state.name}/>

				{/*<!--Whatsapp-->*/}
				<TextField
					hintText="9999 444 999" floatingLabelText="Whatsapp number"
					onChange={(number) => this.setState({whatsAppNumber: number.target.value})}
					value={this.state.whatsAppNumber}
				/>
				{/*<!--Studio-->*/}
				<AutoComplete dataSource={["Gold's Gym RMZ", "Tribe VR"]} floatingLabelText="Studio"
											filter={fuzzyFilter} maxSearchResults={5}
											onUpdateInput={st => this.setState({studio: st})}/>

				<RaisedButton primary={true} label="Submit" fullWidth={true} onTouchEnd={this.addMember.bind(this)}
											style={{marginTop: 20}}/>

			</CommonAddComponent>
		);
	}
}

export default MemberAdd