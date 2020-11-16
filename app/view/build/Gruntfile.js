/*
 * grunt-angular-templates
 * https://github.com/ericclemmons/grunt-angular-templates
 *
 * Copyright (c) 2013 Eric Clemmons
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	grunt
	      .initConfig({

	         // Basic settings and info about our plugins
	         pkg : grunt.file.readJSON('package.json'),

	         ngtemplates : {
		         app : {
		            src : [
		                  'dashboard/frontend/components/chart/chart.html',
		                  'dashboard/frontend/components/gauge/gauge.html',
		                  'dashboard/frontend/components/grid/grid.html',
		                  'dashboard/frontend/components/toggleSwitch/toggle_switch.html',
		                  'dashboard/frontend/components/button/button.html',
		                  'dashboard/frontend/components/map/map.html',
                          'dashboard/frontend/components/accelerometer/accelerometer.html',
		                  'layout/frontend/components/header/header.html',
		                  'layout/frontend/components/menu/menu.html',
                    	  'dashboard/frontend/components/list/autocomplete.html'],
		            dest :'build/javascript/uicomponents_templates.js',
		            options : {
		               bootstrap : function(module, script) {
			               return 'var cachedTemplates = (["$templateCache", function($templateCache) {'
			                     + script + '}])';
		               },
		               htmlmin : {
		                  collapseBooleanAttributes : true,
		                  collapseWhitespace : true,
		                  removeAttributeQuotes : true,
		                  removeComments : true, // Only if you don't use comment directives!
		                  removeEmptyAttributes : true,
		                  removeRedundantAttributes : true,
		                  removeScriptTypeAttributes : true,
		                  removeStyleLinkTypeAttributes : true
		               },
		               url : function(url) {
			               return url.replace('dashboard/',
			                     '/UIComponents/dashboard/').replace(
			                     'dashboardBuilder/',
			                     '/UIComponents/dashboardBuilder/').replace(
			                     'layout/',
			                     '/UIComponents/layout/');
		               }
		            }
		         }
	         },

	         ngAnnotate : {
	            options : {
		            singleQuotes : true
	            },
	            app : {
		            files : {
		               'concat/min-safe/angular-promise-buttons.js':['dashboard/frontend/components/button/angular-promise-buttons.js'],
		               'concat/min-safe/buttons.js':['dashboard/frontend/components/button/button.js'],
		               'concat/min-safe/angular.morris.js' : [ 'dashboard/frontend/components/chart/angular.morris.js' ],
		               'concat/min-safe/morris.js' : [ 'dashboard/frontend/components/chart/morris.js' ],
		               'concat/min-safe/chart.js' : [ 'dashboard/frontend/components/chart/chart.js' ],
		               'concat/min-safe/justgauge.js' : [ 'dashboard/frontend/components/gauge/justgauge.js' ],
		               'concat/min-safe/angular.gauge.min.js' : [ 'dashboard/frontend/components/gauge/angular.gauge.min.js' ],
		               'concat/min-safe/module.js' : [ 'layout/frontend/components/module.js' ],
		               'concat/min-safe/header.js' : [ 'layout/frontend/components/header/header.js' ],
		               'concat/min-safe/menu.js' : [ 'layout/frontend/components/menu/menu.js' ],
		               'concat/min-safe/gauge.js' : [ 'dashboard/frontend/components/gauge/gauge.js' ],
		               'concat/min-safe/markerClusterer.js' : [ 'dashboard/frontend/components/map/markerClusterer.js' ],
		               'concat/min-safe/grid.js' : [ 'dashboard/frontend/components/grid/grid.js' ],
                       'concat/min-safe/accelerometer.js' : [ 'dashboard/frontend/components/accelerometer/accelerometer.js' ],
		               'concat/min-safe/angular_toggle_switch.js' : [ 'dashboard/frontend/components/toggleSwitch/angular_toggle_switch.js' ],
		               'concat/min-safe/toggle_switch.js' : [ 'dashboard/frontend/components/toggleSwitch/toggle_switch.js' ],
                       'concat/min-safe/map.js' : [ 'dashboard/frontend/components/map/map.js' ],
		               'concat/min-safe/angular_gridster.min.js':['dashboardBuilder/lib/gridster/angular_gridster.min.js'],
                       'concat/min-safe/angucomplete.alt.js' :['dashboard/frontend/components/list/angucomplete.alt.js'],
                       'concat/min-safe/autocomplete.js' :['dashboard/frontend/components/list/autocomplete.js'],
		               'concat/min-safe/httpProvider.js' : [ 'httpProvider.js' ],
		               'concat/min-safe/wsProvider.js' : [ 'wsProvider.js' ],
		            }
	            }
	         },

	         concat : {

	         	advancedapp_js : {
		            src : [
		            	'concat/min-safe/angular-promise-buttons.js',
		            	'concat/min-safe/buttons.js',
		            	'concat/min-safe/angular.morris.js',
		               'concat/min-safe/morris.js',
		               'concat/min-safe/chart.js',
		               'concat/min-safe/justgauge.js',
		               'concat/min-safe/angular.gauge.min.js',
		               'concat/min-safe/angular_toggle_switch.js',
		               'concat/min-safe/module.js',
		               'concat/min-safe/header.js',
		               'concat/min-safe/menu.js',
		               'concat/min-safe/gauge.js',
		               'concat/min-safe/map.js',
		               'concat/min-safe/markerClusterer.js',
		               'concat/min-safe/grid.js',
                       'concat/min-safe/accelerometer.js',
		               'concat/min-safe/toggle_switch.js',
		               'concat/min-safe/angular_gridster.min.js',
                       'concat/min-safe/angucomplete.alt.js',
                       'concat/min-safe/autocomplete.js',
		               'concat/min-safe/httpProvider.js',
		               'concat/min-safe/wsProvider.js',
		            ],
		           dest : 'build/javascript/uicomponents_resources.js'
	            },
	            <!-- CSS -->  
	            advancedapp_css : {
	               src : [
	               	"layout/frontend/components/header/header.css",
	                  "layout/frontend/components/menu/menu.css",  
	                  "dashboard/frontend/components/chart/chart.css",  
	                  "dashboard/frontend/components/map/map.css", 
	                  "dashboard/frontend/components/grid/grid.css",
                 	  "dashboard/frontend/components/accelerometer/accelerometer.css",
	                  "dashboardBuilder/lib/gridster/angular_gridster.min.css",
	                  "dashboardBuilder/css/dashboard.css",
	                  "dashboard/frontend/components/toggleSwitch/angular_toggle_switch.css",
	                  "dashboard/frontend/components/button/button.css",
               		  "dashboard/frontend/components/list/angucomplete.alt.css",
                      "dashboard/frontend/components/thermometer/style.css"
	              ],
	               dest : 'build/css/uicomponents_resources.css'
	            }

	         },

	         uglify : {
					advancedapp: {
						files: {
							'build/javascript/uicomponents_resources.min.js': ['build/javascript/uicomponents_resources.js']
						}
					}
					
	         },

	         cssmin : {
		         advancedapp: {
						src: 'build/css/uicomponents_resources.css',
						dest:'build/css/uicomponents_resources.min.css'
				   }
	         },

	         clean : {
		         folder : [ 'concat/', 'lib/']
	         }
	      });

	// Load the plugin
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Run the tasks
	//grunt.registerTask('default', ['fetchFromCDN']);
	grunt.registerTask('app', [ 'ngtemplates', 'ngAnnotate', 'concat:advancedapp_js', 'concat:advancedapp_css', 'uglify:advancedapp', 'cssmin:advancedapp']);
};