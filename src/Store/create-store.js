/**
 * Created by rs on 07/01/17.
 */

import {createStore, applyMiddleware} from 'redux';
import {combinedReducers} from '../Reducers/index';
import thunk from 'redux-thunk'
import promiseMiddleware from '../middleware/promise-middleware'
import {composeWithDevTools} from 'remote-redux-devtools';
import {persistStore, autoRehydrate} from 'redux-persist'
import localForage from 'localforage'

const store = () => {
	localForage.config({
		driver: localForage.INDEXEDDB,
		name: 'spin-tool',
		version: 1.0,
		size: 4980736,
		storeName: 'spin_app_data',
		description: 'test for spin app data'
	})
	const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk, promiseMiddleware)), autoRehydrate());
	persistStore(store, {storage: localForage, blacklist: ['routing']});
	return store;
};

export default store;