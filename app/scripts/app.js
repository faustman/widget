'use strict';

var displify = angular.module('displify', ['displify.settings', 'displify.transport'])
  .config(['$settingsProvider', function($settingsProvider){
    console.log('init');

    console.dir($settingsProvider);
    $settingsProvider.initClientSettings();

  }])
  .run(function($settings, $transport){
    console.dir($settings);
    console.log($settings.account + '; ');
    $transport.pageSettings();
  })

