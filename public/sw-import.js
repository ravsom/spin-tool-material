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

self.addEventListener('push', function(event) {
	console.log('Received a push message', event);

	const title = 'Yay a message.';
	const body = 'We have received a push message.';
	const icon = '/images/icon-192x192.png';
	const tag = 'simple-push-demo-notification-tag';

	event.waitUntil(
		self.registration.showNotification(title, {
			body: body,
			icon: icon,
			tag: tag
		})
	);
});

self.addEventListener('notificationclick', function(event) {
	console.log('On notification click: ', event.notification.tag);
	// Android doesn’t close the notification when you click on it
	// See: http://crbug.com/463146
	event.notification.close();

	// This looks to see if the current is already open and
	// focuses if it is
	event.waitUntil(clients.matchAll({
		type: 'window'
	}).then(function(clientList) {
		for (let i = 0; i < clientList.length; i++) {
			const client = clientList[i];
			if (client.url === '/' && 'focus' in client) {
				return client.focus();
			}
		}
		if (clients.openWindow) {
			return clients.openWindow('/');
		}
	}));
});

console.log("serviceworker: registratoin : " + JSON.stringify(self.registration));
console.log("serviceworker: " + JSON.stringify(self.registration));

self.addEventListener('fetch', (event) => {
	console.log('ravi\'s fetch listener - url ' + event.request.url);
	console.log('ravi\'s fetch listener - mode ' + event.request.mode);
	console.log('ravi\'s fetch listener - method ' + event.request.method);

})