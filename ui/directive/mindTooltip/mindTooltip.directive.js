angular.module('kityminderEditor')
    .directive('mindTooltip', ['$rootScope', function($rootScope) {
        return {
            restrict: 'A',
            // templateUrl: 'ui/directive/mindTooltip/mindTooltip.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function($scope, element, attrs) {
                element.on('mouseenter', function(e) {
                    $rootScope.tooltipVal = attrs['mindTooltip'];
                }).on('mouseleave', function(e) {
                    $rootScope.tooltipVal = '';
                })
            }
        }
    }]);