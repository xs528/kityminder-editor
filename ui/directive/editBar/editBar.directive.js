angular.module('kityminderEditor').directive('editBar', [ 'commandBinder', function(commandBinder) {
  return {
    restrict: 'A',
    templateUrl: 'ui/directive/editBar/editBar.html',
    scope: {
      minder: '=',
      editor: '=',
    },
    link: function(scope) {
      scope.visibleMap = {
        task: 'task',
        template: 'template',
      }
      scope.currentVisible = ''

      commandBinder.bind(minder, 'priority', scope);

      scope.toggleBottomBar = function(val) {
        scope.currentVisible = scope.currentVisible === val ? '' : val
      }

      scope.$watch('commandDisabled', function(e) {
        if (scope.commandDisabled) {
          scope.currentVisible = ''
        }
      })
    },
  }
}])
