'use strict';

describe('Service: settings', function () {

  // load the service's module
  beforeEach(module('displify.settings'));

  // instantiate service
  var settings;
  beforeEach(inject(function ($settings) {
    settings = $settings;
  }));

  it('should do something', function () {
    expect(!!settings).toBe(true);
    console.log(settings);
  });

});
