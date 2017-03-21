/**
 * Created by rs on 20/03/17.
 */

import axios from 'axios'

const URL_STUDIOS = "https://ij1fuwpre1.execute-api.us-east-1.amazonaws.com/dev/centres";
const URL_STUDIO = "https://ij1fuwpre1.execute-api.us-east-1.amazonaws.com/dev/centre";

export const getStudiosAPI = () => {
	return axios.get(URL_STUDIOS);
};

export const addStudioAPI = (studio) => {
	return axios.post(URL_STUDIOS, studio);
};

export const updateStudioAPI = (id, studio) => {
	return axios.put(URL_STUDIO + '/' + id, studio);
};