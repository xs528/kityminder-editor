angular.module('kityminderEditor').directive('contextMenu', [
  'commandBinder',
  function(commandBinder) {
    return {
      restrict: 'E',
      templateUrl: 'ui/directive/contextMenu/contextMenu.html',
      scope: {
        minder: '=',
        editor: '=',
      },
      replace: true,
      link: function($scope, element) {
        var minder = $scope.minder
        var editor = $scope.editor
        var container = angular.element(editor.selector)

        $scope.visible = false
        $scope.menus = [
          {
            label: '插入主题',
            shortcutkey: 'Tab',
            disabled: function() {
              return minder.queryCommandState('AppendChildNode') === -1
            },
            action: function() {
              minder.execCommand('AppendChildNode', '分支主题')
              editor.editText()
            },
          },
          {
            label: '插入同级主题',
            shortcutkey: 'Enter',
            disabled: function() {
              return minder.queryCommandState('AppendSiblingNode') === -1
            },
            action: function() {
              minder.execCommand('AppendSiblingNode', '分支主题')
              editor.editText()
            },
          },
          {
            label: '插入上一级主题',
            shortcutkey: 'Shift + Tab',
            disabled: function() {
              return minder.queryCommandState('AppendParentNode') === -1
            },
            action: function() {
              minder.execCommand('AppendParentNode', '分支主题')
              editor.editText()
            },
          },
          {
            label: '上移',
            shortcutkey: 'Alt + Up',
            disabled: function() {
              return false
            },
            action: function() {
              minder.execCommand('ArrangeUp')
            },
            cutLine: true,
          },
          {
            label: '下移',
            shortcutkey: 'Alt + Down',
            action: function() {
              minder.execCommand('ArrangeDown')
            },
          },
          {
            label: '撤销',
            shortcutkey: 'Ctrl + Z',
            disabled: function() {
              return editor.history.hasUndo() == false
            },
            action: function() {
              editor.history.undo()
            },
            cutLine: true,
          },
          // {
          //   label: '重做',
          //   shortcutkey: 'Ctrl + Y',
          //   disabled: function() {
          //     return editor.history.hasRedo() == false
          //   },
          //   action: function() {
          //     editor.history.redo()
          //   },
          // },
          {
            label: '复制' + (kity.Browser.gecko ? '(请使用快捷键)' : ''),
            shortcutkey: 'Ctrl + C',
            disabled: function() {
              return kity.Browser.gecko
            },
            action: function(e) {
              editor.receiver.selectAll()
              console.log(editor);
              editor.clipboard.copy(e)
            },
          },
          {
            label: '剪切' + (kity.Browser.gecko ? '(请使用快捷键)' : ''),
            shortcutkey: 'Ctrl + X',
            disabled: function() {
              return kity.Browser.gecko
            },
            action: function(e) {
              editor.receiver.selectAll()
              editor.clipboard.cut(e)
            },
          },
          {
            label: '粘贴(请使用快捷键)',
            shortcutkey: 'Ctrl + V',
            disabled: function() {
              return true
            },
            action: function() {
            },
          },
          {
            label: '删除',
            shortcutkey: 'Delete',
            disabled: function() {
              return minder.queryCommandState('RemoveNode') === -1
            },
            action: function() {
              minder.execCommand('RemoveNode')
            },
          },
        ]
        $scope.position = {
          top: 0,
          left: 0,
        }

        $scope.menuAction = function(e, actionFn) {
          actionFn(e)
          $scope.visible = false
        }

        var downX, downY
        var MOUSE_RB = 2 // 右键
        var MENU_WIDTH = 220 // 菜单项高度
        var ITEM_HEIGHT = 36 // 菜单项高度
        var SPACE_PIXEL = 5 // 间隔

        editor.receiver.listen(function() {
          $scope.visible = false
          $scope.$digest()
        })
        element.on('contextmenu', function(e) {
          e.preventDefault()
        })
        container.on('mousedown', function(e) {
          if (e.button == MOUSE_RB) {
            e.preventDefault()
            downX = e.clientX
            downY = e.clientY
          }
          $scope.visible = false
          $scope.$digest()
        })

        container.on('mousewheel', function(e) {
          $scope.visible = false
          $scope.$digest()
        })

        container.on('mouseup', function(e) {
          // if (fsm.state() != 'normal') {
          //     return;
          // }
          if (e.button != 2 || e.clientX != downX || e.clientY != downY) {
            return
          }
          if (!minder.getSelectedNode()) {
            return
          }
          var editorOffsetTop = $('.minder-editor-container').offset().top
          var top = e.pageY - editorOffsetTop,
            left = e.pageX
          var containerHeight = container.height()
          var containerWidth = container.width()
          var menuHeight = $scope.menus.length * ITEM_HEIGHT
          if (top + menuHeight > containerHeight) {
            top = top - menuHeight - SPACE_PIXEL
          } else {
            top = top + SPACE_PIXEL
          }
          if (left + MENU_WIDTH > containerWidth) {
            left = left - MENU_WIDTH - SPACE_PIXEL
          } else {
            left = left + SPACE_PIXEL
          }
          $scope.position.top = top
          $scope.position.left = left
          $scope.visible = true
          $scope.$digest()
        })
      },
    }
  },
])
