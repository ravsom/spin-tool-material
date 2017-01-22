import {getRideSessionsAPI} from '../api/sessions'

export const getRideSessions = () => {
	return {
		types: ["REQ_GET_SESSIONS", "REQ_GET_SESSIONS_SUCCESS", "REQ_GET_SESSIONS_FAILURE"],
		promise: () => {
			return getRideSessionsAPI();
		}
	};
};