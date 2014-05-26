ViewMeterCordova
=======================

Phonegap plugin volume detection

## How to install

cordova plugin add https://github.com/AdFabConnect/ViewMeterCordova.git

## How to use

Init the plugin with callback function
```
window.ViewMeterCordova.init(function( i )
{
    
});
```

Start listening to ambient sound
```
window.ViewMeterCordova.start();
```

Stop listening to ambient sound
```
window.ViewMeterCordova.stop();
```
