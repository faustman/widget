'use strict';

describe('Service: transport', function () {

  // load the service's module
  beforeEach(angular.module('displify.transport'));

  // instantiate service
  var transport;
  beforeEach(inject(function (_transport_) {
    transport = _transport_;
  }));

  it('should do something', function () {
    expect(!!transport).toBe(true);
  });

});
