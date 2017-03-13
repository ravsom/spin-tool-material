import {getRideSessionsAPI, addSessionAPI, loadInitialAddSessionDataAPI} from '../api/sessions'

export const getRideSessions = () => {
	return {
		types: ["REQ_GET_SESSIONS", "REQ_GET_SESSIONS_SUCCESS", "REQ_GET_SESSIONS_FAILURE"],
		promise: () => {
			return getRideSessionsAPI();
		}
	};
};

export const addSession = (session) => {
	return {
		types: ["REQ_ADD_SESSION", "REQ_ADD_SESSION_SUCCESS", "REQ_ADD_SESSION_FAILURE"],
		promise: () => {
			return addSessionAPI(session);
		}
	}
};

export const loadInitialAddSessionData = () => {
	return {
		types: ["REQ_LOAD_INIT_ADD_SESSION_DATA", "REQ_LOAD_INIT_ADD_SESSION_DATA_SUCCESS", "REQ_LOAD_INIT_ADD_SESSION_DATA_FAIL"],
		promise: () => {
			return loadInitialAddSessionDataAPI();
		}
	}
};