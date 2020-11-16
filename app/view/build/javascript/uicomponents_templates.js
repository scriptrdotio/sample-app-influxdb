var cachedTemplates = (["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('/UIComponents/dashboard/frontend/components/chart/chart.html',
    "<div class=\"text-center loading\" ng-hide=$ctrl.datas><i class=\"fa fa-spinner fa-spin fa-3x\"></i></div><div class=padder10><div ng-show=$ctrl.noResults class=\"alert alert-danger\">No data to display</div></div><div ng-if=$ctrl.datas><div ng-if=\"$ctrl.type == 'line'\" style=\"height: 85%; width: 100%\" line-data=$ctrl.datas line-xkey={{$ctrl.xkey}} line-ykeys=$ctrl.ykeys line-labels=$ctrl.labels line-colors=$ctrl.colors line-line-width=$ctrl.lineWidth line-point-size=$ctrl.pointSize line-point-fill-colors=$ctrl.pointFillColors line-point-stroke-colors=$ctrl.pointStrokeColors line-ymax=$ctrl.ymax line-ymin=$ctrl.ymin line-smooth=$ctrl.smooth line-hide-hover=$ctrl.hideHover line-hover-callback=\"$ctrl.hoverCallback(index, options, content, row)\" line-parse-time=$ctrl.parseTime line-units=$ctrl.units line-post-units=$ctrl.postUnits line-pre-units=$ctrl.preUnits line-line-date-format=$ctrl.dateFormat(x) line-x-labels=$ctrl.xlabels line-x-label-format=$ctrl.xlabelFormat(x) line-x-label-angle=$ctrl.xlabelAngle line-y-label-format=$ctrl.ylabelFormat(y) line-goals=$ctrl.goals line-goal-stroke-width=$ctrl.goalStrokeWidth line-goal-line-colors=$ctrl.goalLineColors line-events=$ctrl.events line-event-stroke-width=$ctrl.eventStrokeWidth line-event-line-colors=$ctrl.eventLineColors line-continuous-line=$ctrl.continuousLine line-axes=$ctrl.axes line-grid=$ctrl.grid line-grid-text-color=$ctrl.gridTextColor line-grid-text-size=$ctrl.gridTextSize , line-grid-text-family=$ctrl.gridTextFamily line-grid-text-weight=$ctrl.gridTextWeight line-fill-opacity=$ctrl.fillOpacity line-resize=$ctrl.resize line-chart></div><div ng-if=\"$ctrl.type == 'bar'\" style=\"height: 85%; width: 100%\" bar-data=$ctrl.datas bar-x={{$ctrl.xkey}} bar-y=$ctrl.ykeys bar-labels=$ctrl.labels bar-colors=$ctrl.colors bar-resize=$ctrl.resize bar-stacked=$ctrl.stacked bar-hide-hover=$ctrl.hideHover bar-hover-callback=\"$ctrl.hoverCallback(index, options, content, row)\" bar-grid=$ctrl.grid bar-grid-text-color=$ctrl.gridTextColor bar-grid-text-size=$ctrl.gridTextSize , bar-grid-text-family=$ctrl.gridTextFamily bar-grid-text-weight=$ctrl.gridTextWeight bar-axes=$ctrl.axes bar-ymax=$ctrl.ymax bar-ymin=$ctrl.ymin bar-goals=$ctrl.goals bar-goal-stroke-width=$ctrl.goalStrokeWidth bar-goal-line-colors=$ctrl.goalLineColors bar-x-label-angle=$ctrl.xlabelAngle bar-y-label-format=$ctrl.ylabelFormat(y) bar-parse-time=$ctrl.parseTime bar-events=$ctrl.events bar-event-stroke-width=$ctrl.eventStrokeWidth bar-event-line-colors=$ctrl.eventLineColors bar-post-units=$ctrl.postUnits bar-pre-units=$ctrl.preUnits bar-chart></div><div ng-if=\"$ctrl.type == 'area'\" style=\"height: 85%; width: 100%\" area-chart line-colors=$ctrl.colors area-data=$ctrl.datas area-xkey={{$ctrl.xkey}} area-ykeys=$ctrl.ykeys area-labels=$ctrl.labels area-line-width=$ctrl.lineWidth area-point-size=$ctrl.pointSize area-point-fill-colors=$ctrl.pointFillColors area-point-stroke-colors=$ctrl.pointStrokeColors area-ymax=$ctrl.ymax area-ymin=$ctrl.ymin area-smooth=$ctrl.smooth area-hide-hover=$ctrl.hideHover area-hover-callback=\"$ctrl.hoverCallback(index, options, content, row)\" area-parse-time=$ctrl.parseTime area-units=$ctrl.units area-post-units=$ctrl.postUnits area-pre-units=$ctrl.preUnits area-area-date-format=$ctrl.dateFormat(x) area-x-labels=$ctrl.xlabels area-x-label-format=$ctrl.xlabelFormat(x) area-x-label-angle=$ctrl.xlabelAngle area-y-label-format=$ctrl.ylabelFormat(y) area-goals=$ctrl.goals area-goal-stroke-width=$ctrl.goalStrokeWidth area-goal-line-colors=$ctrl.goalLineColors area-events=$ctrl.events area-event-stroke-width=$ctrl.eventStrokeWidth area-event-line-colors=$ctrl.eventLineColors area-continuous-line=$ctrl.continuousLine area-axes=$ctrl.axes area-grid=$ctrl.grid area-grid-text-color=$ctrl.gridTextColor area-grid-text-size=$ctrl.gridTextSize , area-grid-text-family=$ctrl.gridTextFamily area-grid-text-weight=$ctrl.gridTextWeight area-fill-opacity=$ctrl.fillOpacity area-resize=$ctrl.resize area-behave-like-line=$ctrl.behaveLikeLine></div><div ng-if=\"$ctrl.type == 'donut'\" style=\"height: 85%; width: 100%\" donut-data=$ctrl.datas donut-label-color=$ctrl.labelColor donut-background-color=$ctrl.backgroundColor donut-colors=$ctrl.colors donut-formatter=$ctrl.donutFormatter(y,data) donut-resize=$ctrl.resize donut-chart></div></div>"
  );


  $templateCache.put('/UIComponents/dashboard/frontend/components/gauge/gauge.html',
    "<div style=\"width: {{$ctrl.width}}%; height: {{$ctrl.height}}{{$ctrl.heightUnit}};\" class=gauge><div value={{$ctrl.gaugeValue}} value-font-color={{$ctrl.valueFontColor}} min={{$ctrl.min}} max={{$ctrl.max}} hide-min-max={{$ctrl.hideMinMax}} hide-value={{$ctrl.hideValue}} show-inner-shadow={{$ctrl.showInnerShadow}} gauge-color={{$ctrl.gaugeColor}} shadow-opacity={{$ctrl.shadowOpacity}} shadow-size={{$ctrl.shadowSize}} custom-sectors={{$ctrl.customSectors}} label={{$ctrl.label}} label-font-color={{$ctrl.labelFontColor}} start-animation-type={{$ctrl.startAnimationType}} refresh-animation-type={{$ctrl.refreshAnimationType}} counter={{$ctrl.counter}} value-font-family={{$ctrl.valueFontFamily}} relative-gauge-size={{$ctrl.relativeGaugeSize}} value-min-font-size={{$ctrl.valueMinFontSize}} label-min-font-size={{$ctrl.labelMinFontSize}} min-label-min-font-size={{$ctrl.minLabelMinFontSize}} max-label-min-font-size={{$ctrl.maxLabelMinFontSize}} gauge-width-scale={{$ctrl.gaugeWidthScale}} shadow-vertical-offset={{$ctrl.shadowVerticalOffset}} level-colors={{$ctrl.levelColors}} no-gradient={{$ctrl.noGradient}} start-animation-time={{$ctrl.startAnimationTime}} refresh-animation-time={{$ctrl.refreshAnimationTime}} donut={{$ctrl.donut}} donut-start-angle={{$ctrl.donutStartAngle}} reverse={{$ctrl.reverse}} decimals={{$ctrl.decimals}} symbol={{$ctrl.symbol}} format-number={{$ctrl.formatNumber}} human-friendly={{$ctrl.humanFriendly}} human-friendly-decimal={{$ctrl.humanFriendlyDecimal}} on-animation-end={{$ctrl.onAnimationEnd}} pointer={{$ctrl.pointer}} justgage></div></div>"
  );


  $templateCache.put('/UIComponents/dashboard/frontend/components/grid/grid.html',
    "<div class=filter-bar><div class={{$ctrl.class}}><form><div ng-show=\"$ctrl.enableClientSideFilter && $ctrl.mode == 'normal'\" class=\"form-group col-xs-12 col-sm-4 pdr0\"><div class=form-group><input class=form-control ng-change=$ctrl.onFilterChanged() ng-model=$ctrl.quickFilterValue placeholder=\"Client filter\"></div></div><div ng-show=\"$ctrl.enableServerSideFilter && $ctrl.mode == 'infinite'\" class=\"form-group col-xs-12 col-sm-4 pdr0\"><div class=form-group><input class=form-control ng-change=$ctrl.onServerFilterChanged() ng-model=$ctrl.serverFilterText placeholder=\"Server filter\"></div></div><div class=\"col-xs-12 col-sm-4 pull-right text-right\"><button ng-hide={{$ctrl.enableDeleteRow}} ng-click=$ctrl.openConfirmationPopUp() class=\"btn btn-default mt4\" tooltip-placement=left uib-tooltip=\"Delete selected row\"><i class=\"fa fa-close\" aria-hidden=true></i></button> <button ng-hide={{$ctrl.enableAddRow}} ng-click=$ctrl.onAddRow() class=\"btn btn-warning mt4\" tooltip-placement=bottom uib-tooltip=\"Insert row\"><i class=\"fa fa-plus\" aria-hidden=true></i></button></div></form></div></div><div class=col-xs-12 ng-show=$ctrl.showError><div class=alert ng-class=\"'alert-' + ( $ctrl.message.type || 'warning')\">{{$ctrl.message.content}}</div></div><div class=clearfix></div><div class=col-xs-12><div ag-grid=$ctrl.gridOptions class=ag-bootstrap ng-style=$ctrl.style></div></div>"
  );


  $templateCache.put('/UIComponents/dashboard/frontend/components/toggleSwitch/toggle_switch.html',
    "<div ng-click=$ctrl.publishData() ng-style=$ctrl.style><toggle-switch ng-model=$ctrl.switchStatus on-label={{$ctrl.onLabel}} off-label={{$ctrl.offLabel}} knob-label={{$ctrl.knobLabel}} is-disabled=$ctrl.isDisabled class={{$ctrl.class}}></toggle-switch></div>"
  );


  $templateCache.put('/UIComponents/dashboard/frontend/components/button/button.html',
    "<div ng-style=$ctrl.style><button ng-if=$ctrl.isDisabled disabled class=\"{{$ctrl.class}} is-disabled\" ng-click=$ctrl.success() promise-btn=$ctrl.successPromise>{{$ctrl.label}}</button> <button ng-if=!$ctrl.isDisabled class={{$ctrl.class}} ng-click=$ctrl.success() promise-btn=$ctrl.successPromise>{{$ctrl.label}}</button></div>"
  );


  $templateCache.put('/UIComponents/dashboard/frontend/components/map/map.html',
    "<div style=\"height: 90%;\"> \n" +
    "    <section class=\"map-wrap\" ng-if=\"$ctrl.clusteredView == true || $ctrl.showDetailedMap == false\">\n" +
    "        <ng-map id=\"{{'clustered-'+$ctrl.$wdgid}}\" on-zoom_changed=\"$ctrl.onClusteredZoomChanged();\"\n" +
    "                single-info-window=\"true\" zoom-to-inlude-markers=\"true\"\n" +
    "                center=\"{{$ctrl.mapcenter || $ctrl.defaultCenter}}\"\n" +
    "                zoom=\"{{$ctrl.clusterZoom}}\">\n" +
    "            <heatmap-layer ng-if=\"$ctrl.heatmap\"></heatmap-layer>\n" +
    "        </ng-map>\n" +
    "          <div  class=\"heatmap\" ng-if=\"$ctrl.heatmap == true\">\n" +
    "                <h5>Enable Heatmap</h5>\n" +
    "                  <span>\n" +
    "                    <scriptr-toggle-switch resize=\"false\" on-switch-change=\"$ctrl.activateHeatMap\" switch-status=\"$ctrl.switchStatus\"class=\"switch-success switch-small\"></scriptr-toggle-switch>\n" +
    "                  </span>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "	<section class=\"map-wrap\" ng-if=\"$ctrl.clusteredView == false || $ctrl.showDetailedMap == true\">\n" +
    "		<ng-map id=\"{{'detailed-'+$ctrl.$wdgid}}\" on-zoom_changed=\"$ctrl.onDetailedZoomChanged();\"\n" +
    "			single-info-window=\"true\" zoom-to-inlude-markers=\"true\"\n" +
    "			center=\"{{$ctrl.mapcenter || $ctrl.defaultcenter}}\"\n" +
    "			zoom=\"{{$ctrl.detailedmapzoom}}\">\n" +
    "            <drawing-manager ng-if=\"$ctrl.geofenceManager == true\"\n" +
    "                on-overlaycomplete=\"$ctrl.onMapOverlayCompleted()\"\n" +
    "                drawing-control-options=\"{{$ctrl.drawingOptions}}\"\n" +
    "                drawingControl=\"{{$ctrl.drawingControl}}\"\n" +
    "                drawingMode=\"null\"\n" +
    "                rectangleOptions=\"{{$ctrl.overlaySettings}}\"\n" +
    "               >\n" +
    "              </drawing-manager>\n" +
    "		<div>\n" +
    "			<div ng-repeat=\"(key, asset) in $ctrl.displayedAssets\">\n" +
    "				<shape name=\"polyline\" path=\"{{asset.path}}\"\n" +
    "					stroke-color=\"{{asset.pathColor}}\"\n" +
    "					stroke-opacity=\"{{asset.strokeOpacity}}\"\n" +
    "					stroke-width=\"{{asset.strokeWeight}}\" icons=\"{{asset.pathIcon}}\">\n" +
    "				</shape>\n" +
    "				<div ng-repeat=\"marker in asset.markers track by $index\">\n" +
    "					<div ng-if=\"$ctrl.trackedAsset == null\">\n" +
    "						<marker position=\"{{marker.position}}\" title=\"{{marker.display}}\" animation={{marker.animation}}\n" +
    "							icon=\"{{marker.icon}}\" data=\"{{marker.assetKey}}\"\n" +
    "							on-click=\"$ctrl.showAssetInfo(event, marker, '{{marker.assetKey}}', '{{marker.tripKey}}', '{{marker.id}}')\">\n" +
    "						</marker>\n" +
    "					</div>\n" +
    "					<div ng-if=\"$ctrl.trackedAsset !=null\">\n" +
    "						<marker position=\"{{marker.position}}\" title=\"{{marker.title}}\" animation={{marker.animation}}\n" +
    "							icon=\"{{marker.icon}}\" clickable=\"false\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<!-- end trip markers loop -->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "        <div ng-if=\"$ctrl.selectedAsset != null && $ctrl.markerInfoWindow == true\"  >\n" +
    "			<div ng-transclude></div>\n" +
    "          	<info-window id=\"{{'infoWindowTemplate_default_'+$ctrl.$wdgid}}\">\n" +
    "              	<div ng-non-bindable=\"\">\n" +
    "                  <!-- begin table -->\n" +
    "                  <table class=\"table table-bordered\">\n" +
    "                    <thead>\n" +
    "                      <tr>\n" +
    "                        <th ng-repeat=\"(key, value) in marker.details\">{{key}}</th>\n" +
    "                      </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"(key, value) in marker.details\">{{value.value || \"N/A\"}}</td>\n" +
    "                      </tr>\n" +
    "                    </tbody>\n" +
    "                  </table>\n" +
    "               </div>\n" +
    "          	</info-window>\n" +
    "		</div>\n" +
    "        <heatmap-layer ng-if=\"$ctrl.heatmap\"></heatmap-layer>     \n" +
    "		</ng-map>\n" +
    "          \n" +
    "        <div  class=\"messages\" ng-show=\"$ctrl.drawingMessages != null\">\n" +
    "            <div class=\"alert alert-warning\">\n" +
    "              {{$ctrl.drawingMessages}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div  class=\"heatmap\" ng-if=\"$ctrl.heatmap == true\">\n" +
    "                <h5>Enable Heatmap</h5>\n" +
    "                  <span>\n" +
    "                    <scriptr-toggle-switch resize=\"false\" on-switch-change=\"$ctrl.activateHeatMap\" switch-status=\"$ctrl.switchStatus\"class=\"switch-success switch-small\"></scriptr-toggle-switch>\n" +
    "                  </span>\n" +
    "        </div>         \n" +
    "        <div ng-if=\"$ctrl.geofenceManager == true\" class=\"drawingmanager-buttons\">\n" +
    "            <span>\n" +
    "              <a ng-click=\"$ctrl.removeGeofence()\" data-toggle=\"tooltip\" title=\"Delete geofence\" data-placement=\"bottom\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n" +
    "              <a  ng-click=\"$ctrl.saveGeofence()\" data-toggle=\"tooltip\" title=\"Save geofence\" data-placement=\"bottom\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i></a>\n" +
    "              <a type=\"button\" data-toggle=\"tooltip\" title=\"Locate geofence\" ng-click=\"$ctrl.focusGeofence()\" data-placement=\"bottom\"><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i></a>\n" +
    "              <a type=\"button\" data-toggle=\"tooltip\" title=\"Locate vehicle\" ng-click=\"$ctrl.focusVehicle()\" data-placement=\"bottom\"><i class=\"fa fa-car aria-hidden=\"true\"></i> </a>\n" +
    "            </span>\n" +
    "      </div>\n" +
    "	</section>\n" +
    "</div>\n"
  );


  $templateCache.put('/UIComponents/dashboard/frontend/components/accelerometer/accelerometer.html',
    "<div><div class=\"line y\" ng-style=\"{ 'transform' :  $ctrl.yLine, 'border': '1px solid blue' }\"></div><div class=line ng-style=\"{ 'transform':  $ctrl.xLine}\"></div><div class=angle ng-style=\"{ 'transform':  $ctrl.angle }\"></div><div class=guideX></div><div class=guideY></div></div>"
  );


  $templateCache.put('/UIComponents/layout/frontend/components/header/header.html',
    "<header><div class={{$ctrl.class}}><div class=\"logo pull-left\"><img src={{$ctrl.logo}} class=img-responsive></div><div class=\"pull-left appname\">{{$ctrl.appname}}</div><div class=pull-right><div class=\"header-items pull-left\"><div ng-repeat=\"item in $ctrl.items track by $index\" class=pull-left><a ng-click=$ctrl.onItemClick(item) route={{item.route}} index=\"{{colIndex = $index}}\" ng-click=$ctrl.addSelectedClass(colIndex) href={{item.route}}><i class={{item.icon}} aria-hidden=true></i> {{item.label}}</a></div></div><div class=\"pull-left username\"><div class=btn-group uib-dropdown is-open=status.isopen><button id=username-button type=button class=\"btn btn-primary\" uib-dropdown-toggle ng-disabled=disabled><i ng-show=\"$ctrl.user != null\" class=\"fa fa-user-circle\"></i> {{$ctrl.user.login || $ctrl.caretlabel }} <span class=caret></span></button><ul class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu role=menu aria-labelledby=single-button><li ng-if=\"$ctrl.inGroup(item.roles) || !item.roles\" role=menuitem ng-repeat=\"item in $ctrl.subitems track by $index\"><a href={{item.route}}><i class={{item.icon}} aria-hidden=true></i> {{item.label}}</a></li><li ng-show=\"$ctrl.logout && $ctrl.subitems.length > 0\" class=divider></li><li ng-show=$ctrl.logout role=menuitem><a href={{$ctrl.logout.route}}><i class={{$ctrl.logout.icon}} aria-hidden=true></i> {{$ctrl.logout.label || \"Logout\"}}</a></li></ul></div></div></div></div></header>"
  );


  $templateCache.put('/UIComponents/layout/frontend/components/menu/menu.html',
    "<div><div id=\"{{colIndex = $index}}\" ng-class=\"{'side-bar sm level-bg-{{$index}}' : col.class == 'sm', 'side-bar md level-bg-{{$index}}' : col.class == 'md'}\" ng-repeat=\"col in $ctrl.cols track by $index\"><ul class=\"nav nav-pills\" ng-if=$ctrl.currentRoute><li ng-if=\"col.class == 'sm' && ($ctrl.inGroup(item.roles) || !item.roles)\" tooltip-placement=right tooltip-append-to-body=true uib-tooltip={{item.label}} index=\"{{liIndex = $index}}\" ng-repeat=\"item in $ctrl.menuItems[col.key] track by $index\" ng-class=\"(item.route == $ctrl.currentRoute) ? 'active' : ''\"><a href={{item.route}}/{{$ctrl.lockId.value}} ng-click=\"$ctrl.route(item, $event, col.key, colIndex, liIndex)\"><i aria-hidden=true class={{item.iconClass}}></i><strong>{{item.label}}</strong> <i ng-show=item.sub aria-hidden=true class=\"fa fa-angle-right sub-menu-indicator\"></i></a></li><li ng-if=\"col.class == 'md' && ($ctrl.inGroup(item.roles) || !item.roles)\" index=\"{{liIndex = $index}}\" ng-repeat=\"item in $ctrl.menuItems[col.key] track by $index\" class=tool-tip ng-class=\"(item.route == $ctrl.currentRoute) ? 'active' : ''\"><a href={{item.route}}/{{$ctrl.lockId.value}} ng-click=\"$ctrl.route(item, $event, col.key, colIndex, liIndex)\" title={{item.label}}><i aria-hidden=true class={{item.iconClass}}></i><strong>{{item.label}}</strong> <i ng-show=item.sub aria-hidden=true class=\"fa fa-angle-right sub-menu-indicator\"></i></a></li></ul></div></div>"
  );


  $templateCache.put('/UIComponents/dashboard/frontend/components/list/autocomplete.html',
    "<div><span ng-show=$ctrl.showList ng-hide=$ctrl.hideObjects class=script-wrap ng-if=$ctrl.listSelectedObject ng-repeat=\"obj in $ctrl.objects track by $index\"><span style=\"position: relative;\"><span class=script-text uib-tooltip={{obj[$ctrl.titleField]}} tooltip-placement=bottom><i class=\"mr5 text-primary {{obj.icon}}\"></i> {{obj[$ctrl.titleField]}}</span> <a ng-if=\"obj[$ctrl.titleField] != 'nobody'\" href=javascript:void(0); ng-click=$ctrl.addObjectToList(obj) uib-tooltip=Remove tooltip-placement=right><i class=\"fa fa-close\"></i></a></span></span><div class=clearfix></div><div class=\"text-center loading\" ng-show=!$ctrl.showList><i class=\"fa fa-spinner fa-spin fa-3x\"></i></div><angucomplete-alt ng-show=$ctrl.showList id={{$ctrl.id}} placeholder={{$ctrl.placeholder}} default-set-object=$ctrl.defaultSetObject pause={{$ctrl.pause}} hide-objects=$ctrl.hideObjects list-selected-object=$ctrl.listSelectedObject objects=$ctrl.objects selected-object=$ctrl.selectedObject local-data=$ctrl.localData image-field={{$ctrl.imageField}} search-fields={{$ctrl.searchFields}} title-field={{$ctrl.titleField}} description-field={{$ctrl.descriptionField}} image-field={{$ctrl.imageField}} minlength={{$ctrl.minlength}} input-class={{$ctrl.inputClass}} match-class={{$ctrl.matchClass}} maxlength={{$ctrl.maxlength}} selected-object-data=$ctrl.selectedObjectData input-name={{$ctrl.inputName}} clear-selected={{$ctrl.clearSelected}} override-suggestions={{$ctrl.overrideSuggestions}} field-required=$ctrl.fieldRequired field-required-class={{$ctrl.fieldRequiredClass}} initial-value=$ctrl.initialValue input-changed=$ctrl.inputChanged auto-match=$ctrl.autoMatch focus-in=$ctrl.focusIn focus-out=$ctrl.focusOut disable-input=$ctrl.disableInput focus-first=$ctrl.focusFirst field-tabindex={{$ctrl.fieldTabindex}} text-searching={{$ctrl.textSearching}} text-no-results={{$ctrl.textNoResults}}></div>"
  );
}])