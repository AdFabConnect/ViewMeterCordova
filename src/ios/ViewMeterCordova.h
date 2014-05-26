//
//  AppDelegate.h
//
//  Created by Labbé Nicolas on 07/01/2014.
//  Copyright (c) 2014 Adfab. All rights reserved.
//

#import <Cordova/CDVPlugin.h>
#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>

@interface ViewMeterCordova : CDVPlugin {
    AVAudioRecorder *recorder;

    NSTimer *timer;
    NSThread *thread;
    
    // CORDOVA
    NSString *callbackId;
    CDVPluginResult* pluginResult;

}

@end
