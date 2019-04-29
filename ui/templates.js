angular.module('kityminderEditor').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('ui/directive/appendNode/appendNode.html',
    "<div class=\"km-btn-group append-group\"><div class=\"km-btn-item append-child-node\" ng-disabled=\"minder.queryCommandState('AppendChildNode') === -1\" ng-click=\"minder.queryCommandState('AppendChildNode') === -1 || execCommand('AppendChildNode')\" tooltip=\"{{ 'appendchildnode' | lang: 'ui/command' }}\"><i class=\"iconfont icon-xiaji\"></i></div><div class=\"km-btn-item append-sibling-node\" ng-disabled=\"minder.queryCommandState('AppendSiblingNode') === -1\" ng-click=\"minder.queryCommandState('AppendSiblingNode') === -1 ||execCommand('AppendSiblingNode')\" tooltip=\"{{ 'appendsiblingnode' | lang: 'ui/command' }}\"><i class=\"iconfont icon-tongji\"></i></div><div class=\"km-btn-item append-parent-node\" ng-disabled=\"minder.queryCommandState('AppendParentNode') === -1\" ng-click=\"minder.queryCommandState('AppendParentNode') === -1 || execCommand('AppendParentNode')\" tooltip=\"{{ 'appendparentnode' | lang: 'ui/command' }}\"><i class=\"iconfont icon-shangji\"></i></div></div>"
  );


  $templateCache.put('ui/directive/arrange/arrange.html',
    "<div class=\"km-btn-group arrange-group\"><div class=\"km-btn-item arrange-up\" ng-disabled=\"minder.queryCommandState('ArrangeUp') === -1\" ng-click=\"minder.queryCommandState('ArrangeUp') === -1 || minder.execCommand('ArrangeUp')\" title=\"{{ 'arrangeup' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'arrangeup' | lang:'ui/command' }}</span></div><div class=\"km-btn-item arrange-down\" ng-disabled=\"minder.queryCommandState('ArrangeDown') === -1\" ng-click=\"minder.queryCommandState('ArrangeDown') === -1 || minder.execCommand('ArrangeDown');\" title=\"{{ 'arrangedown' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'arrangedown' | lang:'ui/command' }}</span></div></div>"
  );


  $templateCache.put('ui/directive/colorPanel/colorPanel.html',
    "<div class=\"bg-color-wrap\" ng-disabled=\"minder.queryCommandState('background') === -1\" tooltip=\"{{ 'backgroundcolor' | lang: 'ui' }}\"><span class=\"quick-bg-color\" ng-click=\"minder.queryCommandState('background') === -1 || minder.execCommand('background', bgColor)\"><svg class=\"icon-bg\" viewbox=\"0 0 1024 1024\"><defs><style type=\"text/css\"></style></defs><path d=\"M0 0m179.649123 0l664.701754 0q179.649123 0 179.649123 179.649123l0 664.701754q0 179.649123-179.649123 179.649123l-664.701754 0q-179.649123 0-179.649123-179.649123l0-664.701754q0-179.649123 179.649123-179.649123Z\" fill=\"#D7D7D7\" p-id=\"2740\"></path><path d=\"M561.702924 179.649123l318.577778 603.621052a63.476023 63.476023 0 0 1-19.761404 82.039767 52.098246 52.098246 0 0 1-74.853801-22.156726L466.488889 239.532164a63.476023 63.476023 0 0 1 19.761403-82.039766 52.098246 52.098246 0 0 1 75.452632 22.156725z\" fill=\"#666666\" p-id=\"2741\"></path><path d=\"M756.322807 660.509942m-47.906433 0l-382.652631 0q-47.906433 0-47.906433-47.906433l0-24.552047q0-47.906433 47.906433-47.906433l382.652631 0q47.906433 0 47.906433 47.906433l0 24.552047q0 47.906433-47.906433 47.906433Z\" fill=\"#666666\" p-id=\"2742\"></path><path d=\"M557.511111 239.532164L239.532164 847.345029a52.098246 52.098246 0 0 1-74.853801 22.156725 63.476023 63.476023 0 0 1-19.761404-82.039766L462.297076 179.649123A52.098246 52.098246 0 0 1 538.947368 158.690058 63.476023 63.476023 0 0 1 557.511111 239.532164z\" fill=\"#666666\" p-id=\"2743\"></path></svg> <span class=\"bg-color-preview\" ng-style=\"{ 'background-color': bgColor }\" ng-click=\"minder.queryCommandState('background') === -1 || minder.execCommand('background', bgColor)\"></span></span> <span color-picker class=\"bg-color\" set-color=\"setDefaultBg()\"><i class=\"trangle\"></i></span></div>"
  );


  $templateCache.put('ui/directive/contextMenu/contextMenu.html',
    "<div class=\"km-context-menu\"><div class=\"km-menu-list\" ng-if=\"visible\" ng-style=\"position\"><div class=\"km-menu-item\" ng-repeat=\"menu in menus\" ng-click=\"menuAction($event, menu.action)\" ng-class=\"{ 'cur-line': menu.cutLine }\" ng-disabled=\"menu.disabled()\"><span class=\"km-menu-item-label\">{{ menu.label }}</span> <span class=\"km-menu-item-key\">{{ menu.shortcutkey }}</span></div></div></div>"
  );


  $templateCache.put('ui/directive/editBar/editBar.html',
    "<div class=\"edit-bar\"><undo-redo editor=\"editor\"></undo-redo><style-brush minder=\"minder\" class=\"inline-directive\"></style-brush><append-node minder=\"minder\"></append-node><font-operator minder=\"minder\" class=\"inline-directive\"></font-operator><hyper-link minder=\"minder\"></hyper-link><image-btn minder=\"minder\"></image-btn><note-btn minder=\"minder\"></note-btn><div class=\"task-btn btn-group-vertical\" ng-class=\"{'active': currentVisible === visibleMap.task}\" tooltip=\"{{ 'priority' | lang: 'panels' }}&{{ 'progress' | lang: 'panels' }}\" ng-click=\"toggleBottomBar(visibleMap.task)\" ng-disabled=\"commandDisabled\"><i class=\"iconfont icon-renwu\"></i></div><div class=\"template-btn btn-group-vertical\" ng-class=\"{'active': currentVisible === visibleMap.template}\" tooltip=\"{{ 'layout' | lang: 'panels' }}\" ng-click=\"toggleBottomBar(visibleMap.template)\" ng-disabled=\"minder.queryCommandState('template') === -1\"><i class=\"iconfont icon-yangshi\"></i></div><div class=\"layout-btn btn-group-vertical\" ng-click=\"minder.queryCommandState('resetlayout') === -1 || minder.execCommand('resetlayout')\" ng-disabled=\"minder.getStatus() === 'readonly'\" tooltip=\"{{ 'resetlayout' | lang: 'ui/command' }}\"><i class=\"iconfont icon-zhenglibuju\"></i></div><div class=\"bottom-bar\" ng-if=\"currentVisible\"><div class=\"task-wrap\" ng-if=\"currentVisible === visibleMap.task\"><priority-editor minder=\"minder\"></priority-editor><progress-editor minder=\"minder\"></progress-editor></div><div class=\"template-wrap\" ng-if=\"currentVisible === visibleMap.template\"><template-list minder=\"minder\" class=\"inline-directive\"></template-list></div></div><div class=\"mind-tooltip\">{{$root.tooltipVal}}</div></div>"
  );


  $templateCache.put('ui/directive/expandLevel/expandLevel.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default expand\" title=\"{{ 'expandtoleaf' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"minder.execCommand('ExpandToLevel', 9999)\"></button> <button type=\"button\" class=\"btn btn-default expand-caption dropdown-toggle\" title=\"{{ 'expandtoleaf' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'expandtoleaf' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'expandtoleaf' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li ng-repeat=\"level in levels\"><a href ng-click=\"minder.execCommand('ExpandToLevel', level)\">{{ 'expandtolevel' + level | lang:'ui/command' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/fontOperator/fontOperator.html',
    "<div class=\"font-operator km-btn-group\"><div class=\"dropdown font-family-list\" dropdown><div class=\"dropdown-toggle current-font-item\" dropdown-toggle ng-disabled=\"minder.queryCommandState('fontfamily') === -1\" tooltip=\"{{ 'fontfamily' | lang: 'ui' }}\"><span class=\"current-font-family ellipsis\">{{ getFontfamilyName(minder.queryCommandValue('fontfamily')) || fontFamilyList[1].name }}</span><i class=\"trangle\"></i></div><ul class=\"dropdown-menu font-list\"><li ng-repeat=\"f in fontFamilyList\" class=\"font-item-wrap\"><a ng-click=\"minder.execCommand('fontfamily', f.val)\" class=\"font-item\" ng-class=\"{ 'font-item-selected' : f == minder.queryCommandValue('fontfamily') }\" ng-style=\"{'font-family': f.val }\">{{ f.name }}</a></li></ul></div><div class=\"dropdown font-size-list\" dropdown><div class=\"dropdown-toggle current-font-item\" dropdown-toggle ng-disabled=\"minder.queryCommandState('fontsize') === -1\" tooltip=\"{{ 'fontsize' | lang: 'ui' }}\"><span class=\"current-font-size\">{{ minder.queryCommandValue('fontsize') || '字号' }}</span><i class=\"trangle\"></i></div><ul class=\"dropdown-menu font-list\"><li ng-repeat=\"f in fontSizeList\" class=\"font-item-wrap\"><a ng-click=\"minder.execCommand('fontsize', f)\" class=\"font-item\" ng-class=\"{ 'font-item-selected' : f == minder.queryCommandValue('fontsize') }\" ng-style=\"{'font-size': f + 'px'}\">{{ f }}</a></li></ul></div><span class=\"s-btn-icon font-bold iconfont icon-jiacu\" ng-click=\"minder.queryCommandState('bold') === -1 || minder.execCommand('bold')\" ng-class=\"{'font-bold-selected' : minder.queryCommandState('bold') == 1}\" ng-disabled=\"minder.queryCommandState('bold') === -1\" tooltip=\"{{ 'bold' | lang: 'ui' }}\"></span><span class=\"s-btn-icon font-italics iconfont icon-xieti\" ng-click=\"minder.queryCommandState('italic') === -1 || minder.execCommand('italic')\" ng-class=\"{'font-italics-selected' : minder.queryCommandState('italic') == 1}\" ng-disabled=\"minder.queryCommandState('italic') === -1\" tooltip=\"{{ 'italic' | lang: 'ui' }}\"></span><div class=\"font-color-wrap\" ng-disabled=\"minder.queryCommandState('forecolor') === -1\" tooltip=\"{{ 'forecolor' | lang: 'ui' }}\"><span class=\"quick-font-color\" ng-click=\"minder.queryCommandState('forecolor') === -1 || minder.execCommand('forecolor', foreColor)\"><i class=\"iconfont icon-zitiyanse\"></i> <span class=\"font-color-preview\" ng-style=\"{ 'background-color': foreColor }\" ng-click=\"minder.queryCommandState('forecolor') === -1 || minder.execCommand('forecolor', foreColor)\"></span></span> <span color-picker class=\"font-color\" set-color=\"setDefaultColor\"><i class=\"trangle\"></i></span></div><color-panel minder=\"minder\" class=\"inline-directive\"></color-panel></div>"
  );


  $templateCache.put('ui/directive/hyperLink/hyperLink.html',
    "<div class=\"hyperlink-group btn-group-vertical\" dropdown is-open=\"isopen\"><div class=\"hyperlink\" tooltip=\"{{ 'link' | lang: 'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"addHyperlink()\" ng-disabled=\"minder.queryCommandState('HyperLink') === -1\"><i class=\"iconfont icon-lianjie\"></i></div><div class=\"hyperlink-caption dropdown-toggle\" ng-disabled=\"minder.queryCommandState('HyperLink') === -1\" dropdown-toggle><i class=\"trangle\"></i></div><ul class=\"dropdown-menu\" role=\"menu\"><li><a href ng-click=\"addHyperlink()\">{{ 'insertlink' | lang: 'ui' }}</a></li><li><a href ng-click=\"minder.execCommand('HyperLink', null)\">{{ 'removelink' | lang: 'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/imageBtn/imageBtn.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><div class=\"image-btn\" tooltip=\"{{ 'image' | lang: 'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"addImage()\" ng-disabled=\"minder.queryCommandState('Image') === -1\"><i class=\"iconfont icon-tupian\"></i></div><div class=\"image-btn-caption dropdown-toggle\" ng-disabled=\"minder.queryCommandState('Image') === -1\" dropdown-toggle><i class=\"trangle\"></i></div><ul class=\"dropdown-menu\" role=\"menu\"><li><a href ng-click=\"addImage()\">{{ 'insertimage' | lang: 'ui' }}</a></li><li><a href ng-click=\"minder.execCommand('Image', '')\">{{ 'removeimage' | lang: 'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/kityminderEditor/kityminderEditor.html',
    "<div class=\"minder-editor-container\"><div search-box minder=\"minder\" ng-if=\"minder\"></div><div class=\"minder-editor\" ng-class=\"{'style-brush-active': editbarService.isActiveStyleBrush}\"></div><div class=\"km-note\" note-editor minder=\"minder\" ng-if=\"minder\"></div><div class=\"note-previewer\" note-previewer ng-if=\"minder\"></div><div class=\"navigator\" navigator minder=\"minder\" ng-if=\"minder\"></div><context-menu ng-if=\"minder\" minder=\"minder\" editor=\"editor\"></context-menu></div>"
  );


  $templateCache.put('ui/directive/kityminderViewer/kityminderViewer.html',
    "<div class=\"minder-editor-container\"><div class=\"minder-viewer\"></div><div class=\"note-previewer\" note-previewer ng-if=\"minder\"></div><div class=\"navigator\" navigator minder=\"minder\" ng-if=\"minder\"></div><context-menu ng-if=\"minder\" minder=\"minder\" editor=\"editor\"></context-menu></div>"
  );


  $templateCache.put('ui/directive/layout/layout.html',
    "<div class=\"readjust-layout\"><a ng-click=\"minder.queryCommandState('resetlayout') === -1 || minder.execCommand('resetlayout')\" class=\"btn-wrap\" ng-disabled=\"minder.queryCommandState('resetlayout') === -1\"><span class=\"btn-icon reset-layout-icon\"></span> <span class=\"btn-label\">{{ 'resetlayout' | lang: 'ui/command' }}</span></a></div>"
  );


  $templateCache.put('ui/directive/mindTooltip/mindTooltip.html',
    "<div class=\"km-btn-group append-group\"></div>"
  );


  $templateCache.put('ui/directive/navigator/navigator.html',
    "<div class=\"nav-bar\"><div class=\"nav-btn zoom-in\" ng-click=\"minder.execCommand('zoomIn')\" title=\"{{ 'zoom-in' | lang : 'ui' }}\" ng-class=\"{ 'active' : getZoomRadio(zoom) == 0 }\"><i class=\"iconfont icon-fangda\"></i></div><div class=\"nav-btn zoom-out\" ng-click=\"minder.execCommand('zoomOut')\" title=\"{{ 'zoom-out' | lang : 'ui' }}\" ng-class=\"{ 'active' : getZoomRadio(zoom) == 1 }\"><i class=\"iconfont icon-suoxiao\"></i></div><div class=\"nav-btn camera\" ng-click=\"minder.execCommand('camera', minder.getRoot(), 600);\" title=\"{{ 'camera' | lang : 'ui' }}\"><i class=\"iconfont icon-huanyuan_1\"></i></div><div class=\"nav-btn nav-trigger\" ng-class=\"{'active' : isNavOpen}\" ng-click=\"toggleNavOpen()\" title=\"{{ 'navigator' | lang : 'ui' }}\"><i class=\"iconfont icon-liulan\"></i></div></div><div class=\"nav-previewer\" ng-show=\"isNavOpen\"></div>"
  );


  $templateCache.put('ui/directive/noteBtn/noteBtn.html',
    "<div class=\"btn-group-vertical note-btn-group\" dropdown is-open=\"isopen\"><div class=\"note-btn\" tooltip=\"{{ 'note' | lang: 'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"addNote()\" ng-disabled=\"minder.queryCommandState('note') === -1\"><i class=\"iconfont icon-beizhu\"></i></div><div class=\"note-btn-caption dropdown-toggle\" ng-disabled=\"minder.queryCommandState('note') === -1\" dropdown-toggle><i class=\"trangle\"></i></div><ul class=\"dropdown-menu\" role=\"menu\"><li><a href ng-click=\"addNote()\">{{ 'insertnote' | lang: 'ui' }}</a></li><li><a href ng-click=\"minder.execCommand('note', null)\">{{ 'removenote' | lang: 'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/noteEditor/noteEditor.html',
    "<div class=\"panel panel-default\" ng-init=\"noteEditorOpen = false\" ng-show=\"noteEditorOpen\"><div class=\"panel-heading\"><h3 class=\"panel-title\">备注</h3><span>（<a class=\"help\" href=\"https://www.zybuluo.com/techird/note/46064\" target=\"_blank\">支持 GFM 语法书写</a>）</span> <i class=\"close-note-editor iconfont icon-guanbi\" ng-click=\"closeNoteEditor()\"></i></div><div class=\"panel-body\"><div ng-show=\"noteEnabled\" ui-codemirror=\"{ onLoad: codemirrorLoaded }\" ng-model=\"noteContent\" ui-codemirror-opts=\"{\r" +
    "\n" +
    "                gfm: true,\r" +
    "\n" +
    "                breaks: true,\r" +
    "\n" +
    "                lineWrapping : true,\r" +
    "\n" +
    "                mode: 'gfm',\r" +
    "\n" +
    "                dragDrop: false,\r" +
    "\n" +
    "                lineNumbers:true\r" +
    "\n" +
    "             }\"></div><p ng-show=\"!noteEnabled\" class=\"km-note-tips\">请选择节点编辑备注</p></div></div>"
  );


  $templateCache.put('ui/directive/notePreviewer/notePreviewer.html',
    "<div id=\"previewer-content\" ng-show=\"showNotePreviewer\" ng-style=\"previewerStyle\" ng-bind-html=\"noteContent\"></div>"
  );


  $templateCache.put('ui/directive/operation/operation.html',
    "<div class=\"km-btn-group operation-group\"><div class=\"km-btn-item edit-node\" ng-disabled=\"minder.queryCommandState('text') === -1\" ng-click=\"minder.queryCommandState('text') === -1 || editNode()\" title=\"{{ 'editnode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'editnode' | lang:'ui/command' }}</span></div><div class=\"km-btn-item remove-node\" ng-disabled=\"minder.queryCommandState('RemoveNode') === -1\" ng-click=\"minder.queryCommandState('RemoveNode') === -1 || minder.execCommand('RemoveNode');\" title=\"{{ 'removenode' | lang:'ui/command' }}\"><i class=\"km-btn-icon\"></i> <span class=\"km-btn-caption\">{{ 'removenode' | lang:'ui/command' }}</span></div></div>"
  );


  $templateCache.put('ui/directive/priorityEditor/priorityEditor.html',
    "<ul class=\"km-priority tool-group\" ng-disabled=\"commandDisabled\"><li class=\"km-priority-item tool-group-item\" ng-repeat=\"p in priorities\" ng-click=\"commandDisabled || minder.execCommand('priority', p)\" ng-class=\"{ active: commandValue == p }\" title=\"{{ getPriorityTitle(p) }}\"><div class=\"km-priority-icon tool-group-icon priority-{{p}}\"></div></li><li class=\"km-priority-label\">{{ 'priority' | lang: 'panels' }}</li></ul>"
  );


  $templateCache.put('ui/directive/progressEditor/progressEditor.html',
    "<ul class=\"km-progress tool-group\" ng-disabled=\"commandDisabled\"><li class=\"km-progress-label\">{{ 'progress' | lang: 'panels' }}</li><li class=\"km-progress-item tool-group-item\" ng-repeat=\"p in progresses\" ng-click=\"commandDisabled || minder.execCommand('progress', p)\" ng-class=\"{ active: commandValue == p }\" title=\"{{ getProgressTitle(p) }}\"><div class=\"km-progress-icon tool-group-icon progress-{{p}}\"></div></li></ul>"
  );


  $templateCache.put('ui/directive/resourceEditor/resourceEditor.html',
    "<div class=\"resource-editor\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" ng-model=\"newResourceName\" ng-required ng-keypress=\"$event.keyCode == 13 && addResource(newResourceName)\" ng-disabled=\"!enabled\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" ng-click=\"addResource(newResourceName)\" ng-disabled=\"!enabled\">添加</button></span></div><div class=\"resource-dropdown clearfix\" id=\"resource-dropdown\"><ul class=\"km-resource\" ng-init=\"resourceListOpen = false\" ng-class=\"{'open': resourceListOpen}\"><li ng-repeat=\"resource in used\" ng-disabled=\"!enabled\" ng-blur=\"blurCB()\"><label style=\"background: {{resourceColor(resource.name)}}\"><input type=\"checkbox\" ng-model=\"resource.selected\" ng-disabled=\"!enabled\"> <span>{{resource.name}}</span></label></li></ul><div class=\"resource-caret\" click-anywhere-but-here=\"resourceListOpen = false\" is-active=\"resourceListOpen\" ng-click=\"resourceListOpen = !resourceListOpen\"><span class=\"caret\"></span></div></div></div>"
  );


  $templateCache.put('ui/directive/searchBox/searchBox.html',
    "<div id=\"search\" class=\"search-box clearfix\" ng-show=\"showSearch\"><div class=\"input-group input-group-sm search-input-wrap\"><input type=\"text\" id=\"search-input\" class=\"form-control search-input\" ng-model=\"keyword\" ng-keydown=\"handleKeyDown($event)\" aria-describedby=\"basic-addon2\"> <span class=\"input-group-addon search-addon\" id=\"basic-addon2\" ng-show=\"showTip\" ng-bind=\"'第 ' + curIndex + ' 条，共 ' + resultNum + ' 条'\"></span></div><div class=\"btn-group btn-group-sm prev-and-next-btn\" role=\"group\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"doSearch(keyword, 'prev')\"><span class=\"glyphicon glyphicon-chevron-up\"></span></button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"doSearch(keyword, 'next')\"><span class=\"glyphicon glyphicon-chevron-down\"></span></button></div><div class=\"close-search\" ng-click=\"exitSearch()\"><span class=\"glyphicon glyphicon-remove\"></span></div></div>"
  );


  $templateCache.put('ui/directive/searchBtn/searchBtn.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default search\" title=\"{{ 'search' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"enterSearch()\"></button> <button type=\"button\" class=\"btn btn-default search-caption dropdown-toggle\" ng-click=\"enterSearch()\" title=\"{{ 'search' | lang:'ui' }}\"><span class=\"caption\">{{ 'search' | lang:'ui' }}</span> <span class=\"sr-only\">{{ 'search' | lang:'ui' }}</span></button></div>"
  );


  $templateCache.put('ui/directive/selectAll/selectAll.html',
    "<div class=\"btn-group-vertical\" dropdown is-open=\"isopen\"><button type=\"button\" class=\"btn btn-default select\" title=\"{{ 'selectall' | lang:'ui' }}\" ng-class=\"{'active': isopen}\" ng-click=\"select['all']()\"></button> <button type=\"button\" class=\"btn btn-default select-caption dropdown-toggle\" title=\"{{ 'selectall' | lang:'ui' }}\" dropdown-toggle><span class=\"caption\">{{ 'selectall' | lang:'ui' }}</span> <span class=\"caret\"></span> <span class=\"sr-only\">{{ 'selectall' | lang:'ui' }}</span></button><ul class=\"dropdown-menu\" role=\"menu\"><li ng-repeat=\"item in items\"><a href ng-click=\"select[item]()\">{{ 'select' + item | lang:'ui' }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/styleBrush/styleBrush.html',
    "<div class=\"style-brush-btn btn-group-vertical\" ng-class=\"{active: data.isActiveStyleBrush}\" ng-click=\"handleStyle()\" ng-disabled=\"isDisabledOfStyleBrush()\" tooltip=\"{{ data.isActiveStyleBrush ? 'apply_style' : 'style_brush' | lang: 'style_brush' }}\"><i class=\"iconfont icon-geshishua\"></i></div>"
  );


  $templateCache.put('ui/directive/styleOperator/styleOperator.html',
    "<div class=\"style-operator\"><a ng-click=\"minder.queryCommandState('clearstyle') === -1 || minder.execCommand('clearstyle')\" class=\"btn-wrap clear-style\" ng-disabled=\"minder.queryCommandState('clearstyle') === -1\"><span class=\"btn-icon clear-style-icon\"></span> <span class=\"btn-label\">{{ 'clearstyle' | lang: 'ui' }}</span></a><div class=\"s-btn-group-vertical\"><a class=\"s-btn-wrap\" href ng-click=\"minder.queryCommandState('copystyle') === -1 || minder.execCommand('copystyle')\" ng-disabled=\"minder.queryCommandState('copystyle') === -1\"><span class=\"s-btn-icon copy-style-icon\"></span> <span class=\"s-btn-label\">{{ 'copystyle' | lang: 'ui' }}</span></a> <a class=\"s-btn-wrap paste-style-wrap\" href ng-click=\"minder.queryCommandState('pastestyle') === -1 || minder.execCommand('pastestyle')\" ng-disabled=\"minder.queryCommandState('pastestyle') === -1\"><span class=\"s-btn-icon paste-style-icon\"></span> <span class=\"s-btn-label\">{{ 'pastestyle' | lang: 'ui' }}</span></a></div></div>"
  );


  $templateCache.put('ui/directive/templateList/templateList.html',
    "<ul class=\"template-list\"><li ng-repeat=\"(key, templateObj) in templateList\" ng-click=\"minder.execCommand('template', key);\" ng-class=\"{ 'template-item-selected' : key == minder.queryCommandValue('template') }\" title=\"{{ key | lang: 'template' }}\" class=\"template-item\"><i class=\"iconfont {{ templateIconList[key] }}\"></i></li></ul>"
  );


  $templateCache.put('ui/directive/themeList/themeList.html',
    "<div class=\"dropdown theme-panel\" dropdown><div class=\"dropdown-toggle theme-item-selected\" dropdown-toggle ng-disabled=\"minder.queryCommandState('theme') === -1\"><a href class=\"theme-item\" ng-style=\"getThemeThumbStyle(minder.queryCommandValue('theme'))\" title=\"{{ minder.queryCommandValue('theme') | lang: 'theme'; }}\">{{ minder.queryCommandValue('theme') | lang: 'theme'; }}</a> <span class=\"caret\"></span></div><ul class=\"dropdown-menu theme-list\"><li ng-repeat=\"key in themeKeyList\" class=\"theme-item-wrap\"><a ng-click=\"minder.execCommand('theme', key);\" class=\"theme-item\" ng-style=\"getThemeThumbStyle(key)\" title=\"{{ key | lang: 'theme'; }}\">{{ key | lang: 'theme'; }}</a></li></ul></div>"
  );


  $templateCache.put('ui/directive/topTab/topTab.html',
    "<tabset><tab heading=\"{{ 'idea' | lang: 'ui/tabs'; }}\" ng-click=\"toggleTopTab('idea')\" select=\"setCurTab('idea')\"><undo-redo editor=\"editor\"></undo-redo><append-node minder=\"minder\"></append-node><arrange minder=\"minder\"></arrange><operation minder=\"minder\"></operation><hyper-link minder=\"minder\"></hyper-link><image-btn minder=\"minder\"></image-btn><note-btn minder=\"minder\"></note-btn><priority-editor minder=\"minder\"></priority-editor><progress-editor minder=\"minder\"></progress-editor></tab><tab heading=\"{{ 'appearence' | lang: 'ui/tabs'; }}\" ng-click=\"toggleTopTab('appearance')\" select=\"setCurTab('appearance')\"><template-list minder=\"minder\" class=\"inline-directive\"></template-list><theme-list minder=\"minder\"></theme-list><layout minder=\"minder\" class=\"inline-directive\"></layout><style-operator minder=\"minder\" class=\"inline-directive\"></style-operator><font-operator minder=\"minder\" class=\"inline-directive\"></font-operator></tab><tab heading=\"{{ 'view' | lang: 'ui/tabs'; }}\" ng-click=\"toggleTopTab('view')\" select=\"setCurTab('view')\"><expand-level minder=\"minder\"></expand-level><select-all minder=\"minder\"></select-all><search-btn minder=\"minder\"></search-btn></tab></tabset>"
  );


  $templateCache.put('ui/directive/undoRedo/undoRedo.html',
    "<div class=\"km-btn-group do-group border-left\"><div class=\"km-btn-item undo\" ng-disabled=\"editor.history.hasUndo() == false\" ng-click=\"editor.history.hasUndo() == false || editor.history.undo();\" tooltip=\"{{ 'undo' | lang:'ui' }}\"><i class=\"iconfont icon-chexiao\"></i></div><div class=\"km-btn-item redo\" ng-disabled=\"editor.history.hasRedo() == false\" ng-click=\"editor.history.hasRedo() == false || editor.history.redo()\" tooltip=\"{{ 'redo' | lang:'ui' }}\"><i class=\"iconfont icon-zhongzuo\"></i></div></div>"
  );


  $templateCache.put('ui/dialog/hyperlink/hyperlink.tpl.html',
    "<div class=\"modal-header\"><h3 class=\"modal-title\">链接</h3></div><div class=\"modal-body\"><form><div class=\"form-group\" id=\"link-url-wrap\" ng-class=\"{true: 'has-success', false: 'has-error'}[urlPassed]\"><label for=\"link-url\">链接地址：</label><input type=\"text\" class=\"form-control\" ng-model=\"url\" ng-blur=\"urlPassed = R_URL.test(url)\" ng-focus=\"this.value = url\" ng-keydown=\"shortCut($event)\" id=\"link-url\" placeholder=\"必填：以 http(s):// 或 ftp:// 开头\"></div><div class=\"form-group\" ng-class=\"{'has-success' : titlePassed}\"><label for=\"link-title\">提示文本：</label><input type=\"text\" class=\"form-control\" ng-model=\"title\" ng-blur=\"titlePassed = true\" id=\"link-title\" placeholder=\"选填：鼠标在链接上悬停时提示的文本\"></div></form></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\">确定</button> <button class=\"btn btn-warning\" ng-click=\"cancel()\">取消</button></div>"
  );


  $templateCache.put('ui/dialog/imExportNode/imExportNode.tpl.html',
    "<div class=\"modal-header\"><h3 class=\"modal-title\">{{ title }}</h3></div><div class=\"modal-body\"><textarea type=\"text\" class=\"form-control single-input\" rows=\"8\" ng-keydown=\"shortCut($event);\" ng-model=\"value\" ng-readonly=\"type === 'export'\">\r" +
    "\n" +
    "    </textarea></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\" ng-disabled=\"type === 'import' && value == ''\">OK</button> <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button></div>"
  );


  $templateCache.put('ui/dialog/image/image.tpl.html',
    "<div class=\"modal-header\"><h3 class=\"modal-title\">图片</h3></div><div class=\"modal-body\"><tabset><tab heading=\"外链图片\"><form><div class=\"form-group\" ng-class=\"{true: 'has-success', false: 'has-error'}[urlPassed]\"><label for=\"image-url\">链接地址：</label><input type=\"text\" class=\"form-control\" ng-model=\"data.url\" ng-blur=\"urlPassed = data.R_URL.test(data.url)\" ng-focus=\"this.value = data.url\" ng-keydown=\"shortCut($event)\" id=\"image-url\" placeholder=\"必填：以 http(s):// 开头\"></div><div class=\"form-group\" ng-class=\"{'has-success' : titlePassed}\"><label for=\"image-title\">提示文本：</label><input type=\"text\" class=\"form-control\" ng-model=\"data.title\" ng-blur=\"titlePassed = true\" id=\"image-title\" placeholder=\"选填：鼠标在图片上悬停时提示的文本\"></div><div class=\"form-group\"><label for=\"image-preview\">图片预览：</label><img class=\"image-preview\" id=\"image-preview\" ng-src=\"{{ data.url }}\" alt=\"{{ data.title }}\"></div></form></tab><tab heading=\"上传图片\" active=\"true\"><form><div class=\"form-group\"><input type=\"file\" name=\"upload-image\" id=\"upload-image\" class=\"upload-image\" accept=\".jpg,.JPG,jpeg,JPEG,.png,.PNG,.gif,.GIF\" onchange=\"angular.element(this).scope().uploadImage()\"><label for=\"upload-image\" class=\"btn btn-primary\"><span>选择文件&hellip;</span></label></div><div class=\"form-group\" ng-class=\"{'has-success' : titlePassed}\"><label for=\"image-title\">提示文本：</label><input type=\"text\" class=\"form-control\" ng-model=\"data.title\" ng-blur=\"titlePassed = true\" id=\"image-title\" placeholder=\"选填：鼠标在图片上悬停时提示的文本\"></div><div class=\"form-group\"><label for=\"image-preview\">图片预览：</label><img class=\"image-preview\" id=\"image-preview\" ng-src=\"{{ data.url }}\" title=\"{{ data.title }}\" alt=\"{{ data.title }}\"></div></form></tab></tabset></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\">确定</button> <button class=\"btn btn-warning\" ng-click=\"cancel()\">取消</button></div>"
  );

}]);
