'use strict';

angular.module('displify.transport', ['displify.settings'])
  .provider('$transport', function(){

  //TODO: move to settings
  var url = 'http://localhost:4567/data.json';

  function Transport($http, $settings) {
    var queryPageSettings = function() {
      $http.jsonp(url).success(function(data){ console.dir(data) });
    };
    return {
      smthng: function () { console.log($settings.getAccount());}
    }

  }

  Transport.$inject =['$http', '$settings'];

  this.smthng =  function (){console.log('11');};

  this.$get = Transport;


});