angular.module("ui.scrollToTopWhen", [])
.directive("scrollToTopWhen", function ($timeout) {
  function link (scope, element, attrs) {
    scope.$on(attrs.scrollToTopWhen, function () {
      $timeout(function () {
        angular.element(element)[0].scrollTop = 0;
      });
    });
  }
});