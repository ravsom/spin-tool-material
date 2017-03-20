/**
 * Created by rs on 22/01/17.
 */
import {getMembersAPI, addMemberAPI, updateMemberAPI} from '../api/members'

export const getMembers = () => {
	return {
		types: ["REQ_GET_MEMBERS", "REQ_GET_MEMBERS_SUCCESS", "REQ_GET_MEMBERS_FAILURE"],
		promise: () => {
			return getMembersAPI();
		}
	};
};

export const addMember = (member) => {
	return {
		types: ["ADD_MEMBER", "ADD_MEMBER_S", "ADD_MEMBER_F"],
		promise: () => {
			return addMemberAPI(member);
		}
	}
}

export const updateMember = (id, member) => {
	return {
		types: ["ADD_MEMBER", "ADD_MEMBER_S", "ADD_MEMBER_F"],
		promise: () => {
			return updateMemberAPI(id, member);
		}
	}
}