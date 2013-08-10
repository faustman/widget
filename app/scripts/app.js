'use strict';

var displify = angular.module('displify', ['displify.settings'])
  .config(['$settingsProvider', function($settingsProvider){
    console.log('init');

    $settingsProvider.getClientSettings();

  }])
  .run(function($settings){
    console.log($settings);
  })

