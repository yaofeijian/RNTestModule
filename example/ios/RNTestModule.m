//
//  RNTestModule.m
//  AwesomeLibraryExample
//
//  Created by eric on 2023/8/1.
//

#import "RNTestModule.h"


@implementation RNTestModule

  
RCT_EXPORT_METHOD(openCamera:(RCTPromiseResolveBlock)resolve reject:(__unused RCTPromiseRejectBlock)reject) {
  NSLog(@"test camera");
}

@end
