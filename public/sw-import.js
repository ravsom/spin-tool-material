/**
 * Created by rs on 04/02/17.
 */

if (Notification.permission !== 'granted') {
	console.log('The user has not granted the notification permission.');
} else if (Notification.permission === "blocked") {
	/* the user has previously denied push. Can't reprompt. */
} else {
	/* show a prompt to the user */
	console.log('The user has not ---- else.');
}

navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
	serviceWorkerRegistration.pushManager.getSubscription()
		.then(function(subscription) {
			if (!subscription) {
				// Set appropriate app states.
				console.log('subscription: ' + subscription);
			}
		})
		.catch(function(err) {
			console.log('Error during getSubscription()', err);
		});
});