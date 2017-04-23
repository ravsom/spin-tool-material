/**
 * Created by rs on 28/03/17.
 */

import Auth0Lock from 'auth0-lock'
import {browserHistory} from 'react-router'

export default class AuthService {
	constructor(clientId, domain) {
		// Configure Auth0
		this.lock = new Auth0Lock(clientId, domain, {
			auth: {
				redirectUrl: 'http://localhost:3000/login',
				responseType: 'token'
			}
		});
		// Add callback for lock `authenticated` event
		this.lock.on('authenticated', this._doAuthentication.bind(this));

		// Add callback for lock `authorization_error` event
		this.lock.on('authorization_error', this._authorizationError.bind(this))
		// binds login functions to keep this context
		this.login = this.login.bind(this)
	}

	_authorizationError(error) {
		console.error('authorization error: ' + error);
	}

	_doAuthentication(authResult) {
		// Saves the user token
		this.setToken(authResult.idToken)
		// navigate to the home route
		browserHistory.replace('/rides-view');

		// Async loads the user profile data
		this.lock.getProfile(authResult.idToken, (error, profile) => {
			if (error) {
				console.log('Error loading the Profile', error)
			} else {
				console.log('profile: ' + JSON.stringprofile);
				// this.setProfile(profile)
			}
		})
	}

	login() {
		// Call the show method to display the widget.
		this.lock.show()
	}

	loggedIn() {
		// Checks if there is a saved token and it's still valid
		return !!this.getToken()
	}

	setToken(idToken) {
		// Saves user token to local storage
		localStorage.setItem('id_token', idToken)
	}

	getToken() {
		// Retrieves the user token from local storage
		return localStorage.getItem('id_token')
	}

	logout() {
		// Clear user token and profile data from local storage
		localStorage.removeItem('id_token');
	}
}