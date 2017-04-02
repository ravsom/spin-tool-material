const redirect = (dispatch, location) => {
	dispatch({
		type: "@@router/LOCATION_CHANGE",
		payload: {pathname: location, "search": "", "hash": "", "action": "POP", "key": null, "query": {}}
	});
};

export {redirect}