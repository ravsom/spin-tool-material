import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import createStore from './Store/create-store'
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import routes from './routes'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			{routes()}
		</Router>
	</Provider>,
	document.getElementById('root')
);
