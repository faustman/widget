'use strict';

angular.module('displify.transport', ['displify.settings'])
  .provider('$transport', function(){

  function Transport($http, $settings) {
    var endpoint = $settings.server_url + '?url=' + window.location;

    return {
      pageSettings : function() {
        $http.jsonp(endpoint).success(function(data){ console.dir(data) });
      },
      persistEvent : function(){

      }
    }

  }

  Transport.$inject =['$http', '$settings'];

  this.$get = Transport;


});