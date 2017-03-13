/**
 * Created by rs on 22/01/17.
 */
import {getMembersAPI} from '../api/members'

export const getMembers = () => {
	return {
		types: ["REQ_GET_MEMBERS", "REQ_GET_MEMBERS_SUCCESS", "REQ_GET_MEMBERS_FAILURE"],
		promise: () => {
			return getMembersAPI();
		}
	};
};