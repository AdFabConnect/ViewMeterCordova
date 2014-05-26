var ViewMeterCordova = {
	
	init: function(callback)
	{
		cordova.exec(
			callback,
			function(err)
			{
				callback(err);
			}, "ViewMeterCordova", "init", ['']
		);
	},
	
	stop: function(callback)
	{
		cordova.exec(
			callback,
			function(err)
			{
				callback(err);
			}, "ViewMeterCordova", "stop", ['']
		);
	},
	
	start: function(callback)
	{
		cordova.exec(
			callback,
			function(err)
			{
				callback(err);
			}, "ViewMeterCordova", "start", ['']
		);
	}
	
};

module.exports = ViewMeterCordova;
