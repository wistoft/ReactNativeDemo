	let FCM = require('fcm-push');
	let SERVER_KEY = require('./testPushSecret.js').SERVER_KEY;

	let fcm = new FCM(SERVER_KEY);

//client key

	let registrationKey = "fh7akYJ2p7E:APA91bESg4sFtk7xAtnNqGqenpoFkKcZ22nieThcennu_srtEsMgJXCpKw03ZtJXCS3OnothWKMpZQ-2JVW70stXy20rT5a154Oh1WDmT2uk0JgT1taMt43XsoZ10zZhEqMdSUhDN7BV";

//incrementing badge number

	//android

		//Works
		let message = {
			to: registrationKey,
			data: {
				title: 'ReactNative',
				message: 'You have been pushed 8.',
				count: 9
			}
		};

		//work in fore and background.
		//It sets badge count.
		//But no message in status bar
		let message44 = {
			to: registrationKey,
			data: {
				title: 'ReactNative',
				body: 'You have been pushed 1.',		//alias: message
				count: 2
			}
		};

		//The app crashes, when it is open. No error message, or explanation.
		let message23 = {
			to: registrationKey,
			notification: {
				title: 'ReactNative',
				body: 'You have been pushed 2.',	//property message is not working here.
			},
			data: {
				count: 2
			}
		};
		
		//App crashes
		let message33 = {
			to: registrationKey,
			notification: {
				title: 'ReactNative',
				body: 'You have been pushed 3.',	//property message is not working here.
				count: 3
			}
		};


fcm.send(message)
    .then(function(response){
        console.log("Success: ", response);
    })
    .catch(function(err){
        console.log("Error" + err);
		console.log(JSON.stringify(err));
    })