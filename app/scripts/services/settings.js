'use strict';


angular.module('displify.settings', [])
  .provider('$settings', function() {

    // Private variables
    var _account;
    var _client_settings_var = "_dsplfy";
    var _server_url = "http://localhost:4545/";

    // Private constructor
    function Settings($log) {

      return this;
    }

    // Public API for configuration
    Settings.prototype = {
      get account()    { return _account; },
      get server_url() { return _server_url; }
    }

    // Depends injection
    Settings.$inject = ['$log']

    var initClientSettings = function(){
      console.log('get client settings');
      var client_settings = window[_client_settings_var] || {};
      if(!client_settings.id) throw new Error('' + _client_settings_var + ' client settings id not set.');

      _account = client_settings.id;
    }

    return {
      initClientSettings: initClientSettings,
      $get: function(){
        return new Settings;
      }
    }
  });

