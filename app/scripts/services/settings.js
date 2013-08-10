'use strict';


angular.module('displify.settings', [])
  .provider('$settings', function() {

    // Private variables
    var account;
    var client_settings_var = "_dsplfy";

    // Private constructor
    function Settings($log) {
      this.account = account;

      this.test = function(){
        console.log($log)
      }

      return this;
    }

    Settings.$inject = ['$log']

    // Public API for configuration
    this.setAccount = function(a) {
      account = a;
    };
    this.getAccount = function() {
      return account;
    }

    this.getClientSettings = function(){
      console.log('get client settings');
      var client_settings = window[client_settings_var];
      if(!client_settings && client_settings.id) throw new Error('' + client_settings_var + ' client settings id not set.');

      this.setAccount(client_settings.id);
    }

    // Method for instantiating
    this.$get = Settings;
  });

