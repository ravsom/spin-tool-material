/**
 * Created by rs on 15/01/17.
 */
import axios from 'axios'


const URL_GET_RIDES = "https://xf3s07j9uc.execute-api.ap-northeast-1.amazonaws.com/prod";
const URL_POST_ADD_SESSION = "";

export const getRideSessionsAPI = () => {
	return axios.get(URL_GET_RIDES);
};

export const addSessionAPI = (session) => {
	return axios.post(URL_POST_ADD_SESSION, session)
};


