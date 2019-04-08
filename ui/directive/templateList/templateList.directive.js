angular.module('kityminderEditor')
	.directive('templateList', function() {
		return {
			restrict: 'E',
			templateUrl: 'ui/directive/templateList/templateList.html',
			scope: {
				minder: '='
			},
            replace: true,
			link: function($scope) {
				$scope.templateList = kityminder.Minder.getTemplateList();
				$scope.templateIconList = {
					default: 'icon-siweidaotu',
					filetree: 'icon-mulujiegoutu',
					'fish-bone': 'icon-yugutu',
					right: 'icon-danxiangdaotu',
					structure: 'icon-zuzhijiagoutu',
					tianpan: 'icon-tianpantu',
				}
			}
		}
	});