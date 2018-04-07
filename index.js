var time = require('time');

exports.handler = (ev, ctx, cb) => {
	const currentTime = new time.Date();
	currentTime.setTimezone('America/Los_Angeles');
	cb(null, {
		statusCode: '200',
		body: 'The time in Los Angeles is: ' + currentTime.toString(),
	});
};

