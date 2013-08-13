'use strict';

var displify = angular.module('displify', ['displify.settings', 'displify.transport'])
  .config(['$settingsProvider', function($settingsProvider){
    console.log('init');

    $settingsProvider.getClientSettings();

  }])
  .run(function($settings, $transport){
    $transport.smthng();
  })

