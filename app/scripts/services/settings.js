'use strict';

displify.factory('$settings', ['$window', function(win){
  // Simply config
  var _settings = {
    client_settings_var: '_dsplfy'
  };

  return _settings;
}]);

//displify.config(['$provide', '$settings', function ($provide, $settings) {
//    console.log('HELLO!')
//}]);
