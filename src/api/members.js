/**
 * Created by rs on 22/01/17.
 */

import axios from 'axios'

const URL_GET_RIDERS = "https://hwn1sshmzi.execute-api.us-east-1.amazonaws.com/dev/members";

export const getMembersAPI = () => {
	return axios.get(URL_GET_RIDERS);
};