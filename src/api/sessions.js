/**
 * Created by rs on 15/01/17.
 */
import axios from 'axios'


const URL_RIDES = "https://xf3s07j9uc.execute-api.ap-northeast-1.amazonaws.com/prod";
const URL_GET_ADD_SESSION_INIT_DATA = "";

export const getRideSessionsAPI = () => {
	return axios.get(URL_RIDES);
};

export const addSessionAPI = (session) => {
	console.log('session data being posted: ' + JSON.stringify(session));
	return axios({
		method: 'post',
		url: URL_RIDES,
		data: {
			session
		}
	});
};

export const loadInitialAddSessionDataAPI = () => {
	return axios.get(URL_GET_ADD_SESSION_INIT_DATA);
};