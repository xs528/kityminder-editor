angular.module('kityminderEditor').factory('editbarService', function() {
  return {
    isActiveStyleBrush: false,
    popMsg: function(options) {
      if (window.bridge) {
        window.bridge.message(options)
      }
    },
  }
})
