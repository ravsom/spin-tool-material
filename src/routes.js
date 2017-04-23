/**
 * Created by rs on 08/01/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router'

import RootUIContainer from './Containers/RootUIContainer'
import RideAdd from './Containers/RideAddContainer'
import MemberAdd from './Containers/MemberAddContainer'
import PlaylistsAdd from './Containers/PlaylistAddContainer'
import RidesView from './Containers/RidesViewContainer'
import MembersView from './Containers/MembersViewContainer'
import MemberViewOneContainer from './Containers/MemberUpdateContainer'
import StudiosViewContainer from './Containers/StudiosViewContainer'
import StudioAddContainer from './Containers/StudioAddContainer'
import StudioUpdateContainer from './Containers/StudioUpdateContainer'

import SignedOut from './Components/common/SignedOut'
import LoginPage from './Containers/LoginContainer'

import AuthService from './utils/AuthService'

const auth = new AuthService('Xf6mfqavTuIfXgdK29ZSwb6eyqnHxrU5', 'spinfit.eu.auth0.com');

const requireAuth = (nextState, replace) => {
	console.log('checking for auth');
	if (!auth.loggedIn()) {
		replace({pathname: '/members-view'});
		// auth.login.call(this);
	}
};

const routes = () => {
	return (
		<Route path="/">
			<IndexRoute component={LoginPage} auth={auth}/>
			<Route path="login" component={LoginPage} auth={auth}/>
			<Route path="/" component={RootUIContainer} auth={auth}>
				<Route path="rides-view" component={RidesView} onEnter={requireAuth}/>
				<Route path="members-view" component={MembersView}/>
				<Route path="studios-view" component={StudiosViewContainer}/>
				<Route path="signed-out" component={SignedOut}/>
			</Route>
			<Route path="ride-add" component={RideAdd}/>
			<Route path="member-view-one/:id" component={MemberViewOneContainer}/>
			<Route path="member-add" component={MemberAdd}/>
			<Route path="playlists" component={PlaylistsAdd}/>
			<Route path="studios-add" component={StudioAddContainer}/>
			<Route path="studio-update/:id" component={StudioUpdateContainer}/>
		</Route>
	);
};

export default routes;