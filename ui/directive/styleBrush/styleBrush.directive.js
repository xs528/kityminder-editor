angular.module('kityminderEditor')
	.directive('styleBrush', ['editbarService', function(editbarService) {
		return {
			restrict: 'E',
			templateUrl: 'ui/directive/styleBrush/styleBrush.html',
			scope: {
				minder: '='
			},
			replace: true,
			link: function($scope) {
				var minder = $scope.minder;
				var statusMap = {
					copy: 'copy',
					paste: 'paste',
					clear: 'clear',
				}
				var data = $scope.data = editbarService
				data.isActiveStyleBrush = false
				$scope.status = statusMap.paste
				$scope.isDisabledOfStyleBrush = function() {
					return minder.isReadonly() || !(data.isActiveStyleBrush || minder.getSelectedNode())
				}

				$scope.handleStyle = function() {
					if (window.bridge && !window.bridge.isVip()) {
						window.bridge.openVipDialog()
						return
					}
					if (!data.isActiveStyleBrush) {
						if (minder.queryCommandState('copystyle') === -1) {
							$scope.status = statusMap.clear
						} else {
							minder.execCommand('copystyle')
							$scope.status = statusMap.copy
						}
					}
					data.isActiveStyleBrush = !data.isActiveStyleBrush
				}

				minder.on('selectionchange', function() {
					if (data.isActiveStyleBrush) {
						if ($scope.status === statusMap.clear) {
							minder.queryCommandState('clearstyle') === -1 || minder.execCommand('clearstyle')
						} else {
							minder.queryCommandState('pastestyle') === -1 || minder.execCommand('pastestyle')
						}
					}
				})

      },
		}
	}]);