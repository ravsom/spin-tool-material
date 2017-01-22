/**
 * Created by rs on 22/01/17.
 */
import {getRidersAPI} from '../api/users'

export const getRiders = () => {
	return {
		types: ["REQ_GET_RIDERS", "REQ_GET_RIDERS_SUCCESS", "REQ_GET_RIDERS_FAILURE"],
		promise: () => {
			return getRidersAPI();
		}
	};
};