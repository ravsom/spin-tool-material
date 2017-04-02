/**
 * Created by rs on 08/01/17.
 */
import RootComponent from './Components/RootComponent'
import {Route, IndexRoute} from 'react-router'
import React from 'react';
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

import AuthService from './utils/AuthService'

const auth = new AuthService('Xf6mfqavTuIfXgdK29ZSwb6eyqnHxrU5', 'spinfit.eu.auth0.com');

const requireAuth = (nextState, replace) => {
	console.log('checking for auth');
	if (!auth.loggedIn()) {
		replace({pathname: '/members-view'})
		// auth.login.call(this);
	}
};

const routes = () => {
	return (
		<Route path="/" component={RootComponent} auth={auth}>
			<IndexRoute component={RidesView}/>
			<Route path="rides-view" component={RidesView} onEnter={requireAuth}/>
			<Route path="ride-add" component={RideAdd}/>
			<Route path="members-view" component={MembersView}/>
			<Route path="member-view-one/:id" component={MemberViewOneContainer}/>
			<Route path="member-add" component={MemberAdd}/>
			<Route path="playlists" component={PlaylistsAdd}/>
			<Route path="studios-view" component={StudiosViewContainer}/>
			<Route path="studios-add" component={StudioAddContainer}/>
			<Route path="studio-update/:id" component={StudioUpdateContainer}/>
			<Route path="signed-out" component={SignedOut}/>

		</Route>
	);
};

export default routes;