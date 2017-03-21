/**
 * Created by rs on 08/01/17.
 */

import React, {Component} from 'react'
import CommonAddComponent from '../common/CommonAddComponent'
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete'
import RaisedButton from 'material-ui/RaisedButton'
import {redirect} from '../utils'


class MemberAdd extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: props.member ? props.member.name : "",
			phoneNumber: props.member ? props.member.phoneNumber : "",
			studio: props.member ? props.member.studio : null
		}
	}

	addMember() {
		const member = {
			member: {
				name: this.state.name,
				phoneNumber: this.state.phoneNumber,
				studio: this.state.studio
			}
		};
		this.props.member ?
			this.props.updateMember(this.props.member.id, member) : this.props.addMember(member);

		redirect(this.props.dispatch, "/members-view");
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

				{/*<!--Phone number-->*/}
				<TextField
					hintText="9999 444 999" floatingLabelText="Phone number"
					onChange={(number) => this.setState({phoneNumber: number.target.value})}
					value={this.state.phoneNumber}
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