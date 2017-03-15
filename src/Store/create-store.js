/**
 * Created by rs on 07/01/17.
 */

import {createStore, applyMiddleware, compose} from 'redux';
import {combinedReducers} from '../Reducers/index';
import thunk from 'redux-thunk'
import promiseMiddleware from '../middleware/promise-middleware'
import {composeWithDevTools} from 'remote-redux-devtools';
import localForage from 'localforage'
import {persistStore, autoRehydrate} from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'

const store = () => {
	localForage.config({
		driver: localForage.INDEXEDDB,
		name: 'spin-tool',
		version: 1.0,
		size: 4980736,
		storeName: 'spin_app_data',
		description: 'test for spin app data'
	});
	const store = createStore(combinedReducers, undefined, compose(autoRehydrate(),
		composeWithDevTools(applyMiddleware(thunk, promiseMiddleware))));
	persistStore(store, {storage: localForage, transforms: [immutableTransform({blacklist: ['routing']})]});
	store.getState();
	return store;
};

export default store;