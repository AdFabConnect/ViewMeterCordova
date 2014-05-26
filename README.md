VolumeDetectionPhonegap
=======================

Phonegap plugin volume detection

## How to install

cordova plugin add https://github.com/AdFabConnect/VolumeDetectionPhonegap.git

## How to use

Init the plugin with callback function
```
window.VolumeDetectionPhonegap.init(function( i )
{
    
});
```

Start listening to ambient sound
```
window.VolumeDetectionPhonegap.start();
```

Stop listening to ambient sound
```
window.VolumeDetectionPhonegap.stop();
```
