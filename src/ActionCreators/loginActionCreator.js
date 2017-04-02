export const login = (auth) => {
	console.log('login action creator');
	return {
		types: ['AUTH0_LOGIN', 'AUTH0_LOGIN_S', 'AUTH0_LOGIN_F'],
		promise: () => {
			return new Promise((resolve, reject) => {
				auth.login();
				resolve("Success");
			})
		}
	}
};

export const logout = (auth) => {
	return {
		types: ['AUTH0_LOGOUT', 'AUTH0_LOGOUT_S', 'AUTH0_LOGOUT_F'],
		promise: () => {
			return new Promise((resolve, reject) => {
				auth.logout();
				resolve("Success");
			})
		}
	}

};
