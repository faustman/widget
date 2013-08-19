'use strict';

describe('Controller: MainCtrl', function () {

  var MainCtrl, scope, mockedFeed, httpBackend;
  beforeEach(module('displify', 'mockedFeed'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, defaultJSON) {
    httpBackend = $httpBackend;
    $httpBackend.whenJSONP(/query.yahooapis.com/).respond(defaultJSON);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(4);
  });

  it('should have a list of feeds', function() {
    console.log(scope.feeds)
    expect(scope.feeds.length).toBe(1);
    httpBackend.flush();
    expect(scope.feeds[0].items[0].title).toBe('Node Roundup: 0.11.2, 0.10.6, subscribe, Omelette');
  });
});
