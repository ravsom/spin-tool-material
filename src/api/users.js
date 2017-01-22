/**
 * Created by rs on 22/01/17.
 */

import axios from 'axios'


const URL_GET_RIDERS = "https://97sgfwk1bi.execute-api.ap-northeast-1.amazonaws.com/prod/GetUsersFromDynamoDB";
export const getRidersAPI = () => {
	return axios.get(URL_GET_RIDERS);
};