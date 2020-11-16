var myApp = angular.module('myApp', [
    "underscore", 
	"btford.markdown", 
	"schemaForm", 
	"Accelerometer", 
	"IFrame", 
	"Button", 
	"Slider", 
	"ToggleSwitch", 
	"ACL", 
	"Grid", 
	"Map", 
	"Alert", 
	"xeditable", 
	"ui.bootstrap", 
	"ngRoute", 
	"slickCarousel", 
	"ngAnimate", 
	"ngSanitize", 
	"WsClient", 
	"HttpClient", 
	"DataService", 
	"Chart", 
	"gridster",
	"Gauge",
	"Speedometer", 
	"Odometer",
	"SearchBox", 
	"ngMaterial", 
	"ngMessages", 
	"material.svgAssetsCache", 
	"Thermometer", 
	"angularSpectrumColorpicker",
	"angular-underscore/filters", 
	"ui.codemirror",  
	"Dygraphs", 
	"mgcrea.ngStrap", 
	"mgcrea.ngStrap.modal",
    "pascalprecht.translate",
    'ui.select', 
    'ui.highlight',
    'mgcrea.ngStrap.select',
	"Display", 
	"Plotly",
    "ngSchemaFormFile",
    "Layout",   
    "ngTagsInput",  
    "List",
	"Imagemap",
    "Grideye"]);
myApp
    .constant("menuItemsJson",  menuItems)
    .constant("headerItemsJson", headerItems)
    .constant("routingJson", routingItems)
    .config(httpsConfig)
    .config(wssConfig)
    .config(function($routeProvider, routingJson, $sceProvider){
    for(var i = 0; i < routingJson.params.length; i++){
        $routeProvider
            .when("/" + routingJson.params[i].route, {
                    templateUrl: routingJson.params[i].template,
                    controller: routingJson.params[i].controller,
            		reloadOnSearch: false
            })
    }
    $routeProvider.otherwise("/map");
}); 
