/**
 * Created by rs on 22/01/17.
 */

import axios from 'axios'

const URL_MEMBERS = "https://hwn1sshmzi.execute-api.us-east-1.amazonaws.com/dev/members";
const URL_MEMBER = "https://hwn1sshmzi.execute-api.us-east-1.amazonaws.com/dev/member";

export const getMembersAPI = () => {
	return axios.get(URL_MEMBERS);
};

export const addMemberAPI = (member) => {
	console.log('member to be added :' + member);
	return axios.post(URL_MEMBERS, member);
};

export const updateMemberAPI = (id, member) => {
	const url = URL_MEMBER + '/' + id;
	return axios.put(url, member);
};