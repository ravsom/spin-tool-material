import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux'
import createStore from './Store/create-store'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

const store = createStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
