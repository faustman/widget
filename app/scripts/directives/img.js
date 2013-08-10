'use strict';

displify.directive('img', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the img directive');
    }
  };
});
