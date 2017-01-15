/**
 * Created by rs on 08/01/17.
 */
import RootComponent from './Components/RootComponent'
import {Route, IndexRoute} from 'react-router'
import React from 'react';
import SessionAdd from './Containers/SessionAddContainer'
import UsersAdd from './Containers/UserAddContainer'
import PlaylistsAdd from './Containers/PlaylistAddContainer'
import App from './Components/MainApp'

const routes = () => {
	return (
		<Route path="/" component={RootComponent}>
			<IndexRoute component={App}/>
			<Route path="sessions" component={SessionAdd}/>
			<Route path="users" component={UsersAdd}/>
			<Route path="playlists" component={PlaylistsAdd}/>
		</Route>
	);
};

export default routes;