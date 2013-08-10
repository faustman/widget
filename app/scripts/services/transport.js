'use strict';

angular.module('displify.transport', [/*'displify.settings'*/])
  .provider('$transport', function(){

  //TODO: move to settings
  var url = 'http://localhost:4567/data.json';

  function Transport($http, $settings) {
    //here comes this sugar code
    var queryGlobalSettings = function() {
      $http.jsonp(url).success(function(data){ console.dir(data) });
    };
    return {
      smthng: function () { queryGlobalSettings();}
    }

  }

  Transport.$inject =['$http', '$settings'];

  this.smthng =  function (){console.log('11');};

  this.$get = Transport;

});