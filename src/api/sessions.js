/**
 * Created by rs on 15/01/17.
 */
import axios from 'axios'

const URL_RIDES = "https://o8riyd26m1.execute-api.us-east-1.amazonaws.com/dev/rides";

export const getRideSessionsAPI = () => {
	return axios.get(URL_RIDES);
};

export const addSessionAPI = (session) => {
	console.log('session data being posted: ' + JSON.stringify(session));
	return axios({
		method: 'post',
		url: URL_RIDES,
		data: {ride: session}
	});
};
