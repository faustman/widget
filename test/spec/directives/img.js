'use strict';

describe('Directive: img', function () {
  beforeEach(module('widgetApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<img></img>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the img directive');
  }));
});
