var VolumeDetectionPhonegap = {
	
	start: function(str, callback)
	{
		cordova.exec(
			callback,
			function(err)
			{
				callback(err);
			}, "VolumeDetectionPhonegap", "init", ['']
		);
	},
	
	stop: function(callback)
	{
		cordova.exec(
			callback,
			function(err)
			{
				callback(err);
			}, "VolumeDetectionPhonegap", "stop", ['']
		);
	},
	
	restart: function(callback)
	{
		cordova.exec(
			callback,
			function(err)
			{
				callback(err);
			}, "VolumeDetectionPhonegap", "start", ['']
		);
	}
	
};

module.exports = VolumeDetectionPhonegap;
