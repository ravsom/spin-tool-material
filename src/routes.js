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


const routes = () => {
	return (
		<Route path="/" component={RootComponent}>
			<IndexRoute component={RidesView}/>
			<Route path="rides-view" component={RidesView}/>
			<Route path="ride-add" component={RideAdd}/>
			<Route path="members-view" component={MembersView}/>
			<Route path="member-view-one/:id" component={MemberViewOneContainer}/>
			<Route path="member-add" component={MemberAdd}/>
			<Route path="playlists" component={PlaylistsAdd}/>
			<Route path="studios-view" component={StudiosViewContainer}/>
			<Route path="studios-add" component={StudioAddContainer}/>
			<Route path="studio-update/:id" component={StudioUpdateContainer}/>
		</Route>
	);
};

export default routes;