'use strict';

displify.directive('adv', function () {
  console.log('Directive load');
  return {
    replace: true,
    // transclude: true,
    templateUrl: "/views/wrap.html",
    restrict: 'C',
    scope: {
      src: '@'
    },
    link: function postLink(scope, element, attrs) {
      // element.text('this is the img directive');
    }
  };
});
