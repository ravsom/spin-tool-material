/**
 * Created by rs on 20/03/17.
 */

import {getStudiosAPI, addStudioAPI, updateStudioAPI} from '../api/studios'

export const getStudios = () => {
	return {
		types: ["REQ_GET_STUDIOS", "REQ_GET_STUDIOS_SUCCESS", "REQ_GET_STUDIOS_FAILURE"],
		promise: () => {
			return getStudiosAPI();
		}
	};
};

export const addStudio = (studio) => {
	return {
		types: ["ADD_STUDIO", "ADD_STUDIO_S", "ADD_STUDIO_F"],
		promise: () => {
			return addStudioAPI(studio);
		}
	}
};

export const updateStudio = (id, studio) => {
	return {
		types: ["UPDATE_STUDIO", "UPDATE_STUDIO_S", "UPDATE_STUDIO_F"],
		promise: () => {
			return updateStudioAPI(id, studio);
		}
	}
};