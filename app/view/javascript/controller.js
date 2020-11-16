myApp.controller('mapCtrl', function($location, constants, $routeParams, dataService) {
    var vm = this;
    vm.deviceKey = null;

    vm.sources = constants.sources;
    vm.icons = constants.infoWindows.icons;
    vm.data = constants.infoWindows.data;
    
    vm.go = function(path) {
        console.log('going to ' + path);
        $location.path(path)
    }

    vm.markersData = [
        {
            key: 'pressure',
            lat: 147, 
            lng: 162,
            draggable: true,
            icon: {
                url: vm.icons["pressure"],
                unit: 'hPa'
            }
        },
        {
            key: 'temperature',
            lat: 310, 
            lng: 524,
            draggable: true,
            icon: {
                url: vm.icons["temperature"],
                unit: '&deg;C'
            }
        },
        {
            key: 'humidity',
            lat: 310, 
            lng: 743,
            draggable: true,
            icon: {
                url: vm.icons["humidity"],
                unit: '%'
            }
        },
        {
            key: 'co2',
            lat: 130, 
            lng: 633,
            draggable: true,
            icon: {
                url: vm.icons["co2"],
                unit: 'ppm'
            }
        },
        {
            key: 'tvoc',
            lat: 130, 
            lng: 529,
            draggable: true,
            icon: {
                url:  vm.icons["tvoc"],
                unit: 'Index'
            }
        },
        {
            key: 'particulate',
            lat: 130, 
            lng: 422,
            draggable: true,
            class: "large",
            icon: {
                url: vm.icons["particulate"],
                unit: 'μg/m3'
            }
        }, 
        {
            key: 'vibration',
            lat: 218, 
            lng: 76,
            draggable: true,
            class: "large",
            icon: {
                url: vm.icons["accelerometer"],
                unit: 'g'
            }
        },
        {
            key: 'noise',
            lat: 320, 
            lng: 180,
            draggable: true,
            icon: {
                url: vm.icons["noise"],
                unit: 'db'
            }
        }
    ];
    
    vm.init = function() {
         if($routeParams && $routeParams.deviceId) {
             vm.deviceKey = $routeParams.deviceId;
             vm.params = {"id":  vm.deviceKey }
             vm.tag = "dashboard_" +  vm.deviceKey;
         }
        
        //for(var i = 0; i < vm.markersData.length; i++){
            
        //}
        
        /*var obj = {
            pressure: marker.details.pressure.value || 'N/A',
            temperature: marker.details.temperature.value || 'N/A',
            humidity: marker.details.humidity.value || 'N/A',
            proximity: marker.details.proximity.value || 'N/A',
            accelerometer: (marker.details.acc_x)? marker.details.acc_x.value + ', ' + marker.details.acc_y.value + ', ' + marker.details.acc_z.value: 'N/A',
            magnetic: (marker.details.mag_x)? marker.details.mag_x.value + ', ' + marker.details.mag_y.value + ', ' + marker.details.mag_z.value: 'N/A',
            gyroscope: (marker.details.gyr_x)? marker.details.gyr_x.value + ', ' + marker.details.gyr_y.value + ', ' + marker.details.gyr_z.value: 'N/A',
            luminosity: marker.details.luminosity.value || 'N/A'
        }
        */
    }
    
    vm.transformData = function(data){
        
        var dataKeys = Object.keys(data);
        

        for(var i = 0; i < dataKeys.length; i++){
            var val = data[dataKeys[i]].value;
            if(val){
                if(isNaN(val)){
                    data[dataKeys[i]] = val;
                }else{
                    data[dataKeys[i]] = parseFloat(val);
                }
            }            
        }
        data["particulate"] = "PM1: "+data["pm1_0"]+"<br/>"+"PM2.5: "+data["pm2_5"]+"<br/>"+"PM10: "+data["pm10_0"];
        data["vibration"] = "Acc.X: "+data["acc_x"]+"<br/>"+"Acc.Y: "+data["acc_y"]+"<br/>"+"Acc.Z: "+data["acc_z"];
        return data;
    }
    
    vm.onSelectAsset = function(data) {
        if(data){
            vm.selectedDevice = data;
            vm.params = {"id": data.assetId}
        }
        if($routeParams && $routeParams.deviceId != data.assetId )
        	$location.path("/map/deviceId/"+data.assetId)
    }
    
    vm.setMarkerIcon = function(data, marker){
        marker.icon =  constants.sources[marker.source]["mapMarker"];
        return marker;
    }
    
    vm.parseImageMapData = function(data, icons) {
        
        //extracting the img src from icons objects
        var regex = /<img.*?src=['"](.*?)['"]/;
        
        for(var i = 0; i < vm.markersData.length; i++){
            if(icons[vm.markersData[i].key]){
                vm.markersData[i].icon.url = regex.exec(icons[vm.markersData[i].key].$$unwrapTrustedValue())[1];
            }
        }
    }
    
    vm.callback = function(data){
        return data;
    }
});
    
myApp.controller('menuCtrl', function(headerItemsJson, menuItemsJson) {
    var vm = this;
    vm.headerItems = headerItemsJson;
    vm.user = JSON.parse($.cookie('user'));
    vm.menuItems = menuItemsJson;
     
});

myApp.controller('searchDevicesCtrl', function($location, headerItemsJson, menuItemsJson, $route, $routeParams) {
    var vm = this;
    
   vm.init = function() {
         if($routeParams && $routeParams.deviceId) {
             vm.selectedDevice = $routeParams.deviceId;
             vm.params = {"id":  vm.deviceKey }
             vm.tag = "dashboard_" +  vm.deviceKey;
         }
        
    }
    vm.listCallback = function(data){
        vm.tripsData = [
            {
                "key" : "all",
                "name" : "All"
            }
        ];
        for(var i = 0; i < data.length; i++) {
            vm.tripsData.push({"key": data[i].id, "name": data[i].id})
        }
        return vm.tripsData;
    }
     
     
     vm.onSelect = function(data){
         if(data){
            vm.selectedDevice = data.originalObject;
            vm.params = {"id": vm.selectedDevice.key}
        }
         
        if(vm.selectedDevice.key == "all") {
            $location.path("/map");
        } else {
            if($routeParams.deviceId)
                $route.updateParams({"deviceId": vm.selectedDevice.key});
        	else 
            	$location.path($route.current.originalPath + "/deviceId/" + vm.selectedDevice.key);
        }
         
        return data;
        
     }
     
});

myApp.controller('notificationCtrl', function(httpClient) {
    var vm = this;
    vm.params = {"emails": []} 
    httpClient
        .get("app/api/notifications/getSettings", null)
        .then(
        function(data, response) {
            if(data && (data.emails || data.mobiles)){
                vm.emails= [];//data.emails;
                vm.mobiles = []; //data.mobiles;
                for(var i = 0; i < data.emails.length; i++){
                    vm.emails.push({"text":data.emails[i]});
                }
                for(var i = 0; i < data.mobiles.length; i++){
                    vm.mobiles.push({"text":data.mobiles[i]});
                }
            }else{
                vm.emails = [];
                vm.mobiles = [];
            }
        },
        function(err) {
            console.log('ERROR', err);
        });

    vm.buildParams = function(){
		var emailsArray = [];
		var mobilesArray = [];
		for(var i = 0; i < vm.emails.length; i++){
			emailsArray.push(vm.emails[i]["text"]);
		}
		for(var i = 0; i < vm.mobiles.length; i++){
			mobilesArray.push(vm.mobiles[i]["text"]);
		}
		vm.params["emails"] = emailsArray;
		vm.params["mobiles"] = mobilesArray;
	}

});

myApp.controller('rulesCtrl', function(httpClient, $sce, $timeout,$routeParams) {
    var vm = this;
    var params = {};
    params["scriptName"] = $routeParams.id;
    httpClient
        .get("app/api/rules/getGenericRuleEditor", null)
        .then(
        function(data, response) {
             vm.rulesrc = $sce.trustAsResourceUrl(data);
             $timeout(function() {
               $(".loading-frame").css("display", "none")
               $(".allFrame").css("display","")
            }, 2000);
        },
        function(err) {
            console.log('ERROR');
        });
});

myApp.controller('alertsCtrl', function(httpClient, $routeParams, constants, $mdDialog) {
       var vm = this;
       vm.icons = constants.infoWindows.icons;
       vm.deviceKey = null;
     
       vm.init = function(){
            if($routeParams && $routeParams.deviceId) {
                vm.deviceKey = $routeParams.deviceId;
                vm.params = {"id":  vm.deviceKey }
                vm.tag = "dashboard_" +  vm.deviceKey;
                httpClient.get("app/api/getLatestDevice", vm.params).then(
                function(data, response) {
                    vm.summaryData(data)
                },
                function(err) {
                    console.log('ERROR', error);
                });
             }
        }
		
        vm.formatData = function(data){
            if(data){
                return {documents: data, count: data.length}  
            }
        }
        
        vm.summaryData = function(data) {
            if(data && data[vm.deviceKey] && data[vm.deviceKey][0] && data[vm.deviceKey][0][0])
                vm.selectedDevice = data[vm.deviceKey][0][0];
                var selectedDeviceSensors = _.keys(vm.selectedDevice);
            	vm.colDef = _.filter(constants.alertsGrid, function(columns) { 
                    return selectedDeviceSensors.indexOf(columns.field) > -1;
                });
            
        }
        
        vm.onCellClicked = function(params, gridOptions) {
    var messages = "";

    try {

      if(typeof params.value == "object" && Array.isArray(params.value)){
        _.each(params.value, function(alert){
         // var json = JSON.parse(alert);
          messages += alert.message +"<br/>";
        })
      } else {
        var json = JSON.parse(params.value);
        messages += json.message +"<br/>";
      }

    } catch(error) {
      messages +=  params.value +"<br/>";
    }

    if(params.colDef.headerName == "Alerts") {
      var alert = $mdDialog.alert({
        title: 'Alerts',
        htmlContent: messages,
        clickOutsideToClose:true,
        escapeToClose: true,
        ok: 'Close'
      });
      $mdDialog
        .show( alert )
        .finally(function() {
        alert = undefined;
      });

    }
  }
});
        	

myApp.controller('dashboardCtrl', function($scope,  wsClient, httpClient, $routeParams, constants, $timeout) {
    var vm = this;
    vm.icons = constants.infoWindows.icons;
    vm.deviceKey = null;
    vm.view = "live";
    vm.gridsterOptions = {
        floating: false,
        defaultSizeY: 50,
        defaultSizeX:50,
        minRows: 1, // the minimum height of the grid, in rows
        maxRows: 100,
        columns: 10, // the width of the grid, in columns
        colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
        rowHeight: '/2', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
        margins: [10, 10], // the pixel distance between each widget
        defaultSizeX: 2, // the default width of a gridster item, if not specifed
        defaultSizeY: 1, // the default height of a gridster item, if not specified
        mobileBreakPoint:480, // if the screen is not wider that this, remove the grid layout and stack the items
        minColumns: 1, // the minimum columns the grid must have
        resizable: {
            enabled: false
        },
        draggable: {
            enabled: false
        }
    };
    
    vm.liveItems = [
            {
               "key": "temperature",
               "label": "Temperature",
               "formatFunction":  function(data, self) { return vm.temperatureFormatData(data, self) } ,
               "levelColors": ["#1e79da","#fce94f","#fcaf3e","#d93b3b", "#a00649"],
               "min": 0,
               "max": 85,
               "symbol":"μg/m3",
               "size": {sizeX: 2, sizeY: 3 },
               "type": "gauge"
        	},
            {
               "key": "humidity",
               "label": "Humidity",
               "formatFunction": function(data, self) { return vm.humidityFormatData(data, self) },
               "levelColors": ["#1e79da","#fce94f","#fcaf3e","#d93b3b", "#a00649"],
               "min": 0,
               "max": 100,
               "symbol":"%",
               "size": {sizeX: 2, sizeY: 3 },
               "type": "gauge"
        	},
            {
               "key": "pressure",
               "label": "Pressure",
               "formatFunction":  function(data, self) { return vm.pressureFormatData(data, self)},
               "levelColors": ["#1e79da","#fce94f","#fcaf3e","#d93b3b", "#a00649"],
               "min": 26,
               "max": 1260,
               "symbol":"hPa",
               "size": {sizeX: 2, sizeY: 3 },
               "type": "gauge"
        	},
            {
               "key": "co2",
               "label": "Co2",
               "formatFunction":  function(data, self) { return vm.co2FormatData(data, self) },
               "levelColors": ["#1e79da","#fce94f","#fcaf3e","#d93b3b", "#a00649"],
               "min": 0,
               "max": 40000,
               "symbol":"ppm",
               "size": {sizeX: 2, sizeY: 3 },
               "type": "gauge"
        	},
            {
               "key": "tvoc",
               "label": "TVOC",
               "formatFunction":  function(data, self) { return vm.tvocFormatData(data, self) },
               "levelColors": ["#1e79da","#fce94f","#fcaf3e","#d93b3b", "#a00649"],
               "min": 0,
               "max": 60000,
               "symbol":"Index",
               "size": {sizeX: 2, sizeY: 3 },
               "type": "gauge"
        	},
            {
               "key": "noise",
               "label": "Noise",
               "formatFunction": function(data, self) { return vm.noiseFormatData(data, self) },
               "levelColors": ["#1e79da","#fce94f","#fcaf3e","#d93b3b", "#a00649"],
               "min": 0,
               "max": 50000,
               "symbol":"db",
               "size": {sizeX: 2, sizeY: 3 },//, col: 1, row: 3 },
               "type": "gauge"
        	},
            {
               "key": "pm1_0",
               "label": "PM 1.0",
               "formatFunction":  function(data, self) { return vm.pm1FormatData(data, self) },
               "levelColors": ["#1e79da","#fce94f","#fcaf3e","#d93b3b", "#a00649"],
               "min": 0,
               "max": 500,
               "symbol":"μg/m3",
               "size": {sizeX: 2, sizeY: 3 },
               "type": "gauge"
        	},
            {
               "key": "pm2_5",
               "label": "PM 2.5",
               "formatFunction": function(data, self) { return vm.pm25FormatData(data, self) },
               "levelColors": ["#1e79da","#fce94f","#fcaf3e","#d93b3b", "#a00649"],
               "min": 0,
               "max": 500,
               "symbol":"μg/m3",
               "size": {sizeX: 2, sizeY: 3 },
               "type": "gauge"
        	},
            {
               "key": "pm10_0",
               "label": "PM 10.0",
               "formatFunction":  function(data, self) { return vm.pm10FormatData(data, self) },
               "levelColors": ["#1e79da","#fce94f","#fcaf3e","#d93b3b", "#a00649"],
               "min": 0,
               "max": 500,
               "symbol":"μg/m3",
               "size": {sizeX: 2, sizeY: 3 },
               "type": "gauge"
        	},
        	{
               "key": "grideye",
               "label": "Grid Eye",
               "formatFunction":  function(data, self) { return vm.heatmapFormatData(data, self) },
               "size": {sizeX: 10, sizeY: 6 },
               "options": {
                    displayModeBar: false, 
                    displaylogo: false,
                },
               "layout": {
                    showlegend: false,
                    title: false,
                    xaxis: {
                        autorange: true,
                        showgrid: false,
                        zeroline: false,
                        showline: false,
                        autotick: true,
                        ticks: '',
                        showticklabels: false
                      },
                      yaxis: {
                        autorange: true,
                        showgrid: false,
                        zeroline: false,
                        showline: false,
                        autotick: true,
                        ticks: '',
                        showticklabels: false
                      },
               		  margin: {
                          l: "10",
                          r: "10",
                          t: "10",
                          b: "10"
                      }
                },
           	    "colorScale": "Portland",
                "type": "grideye"
        	},
            /**{
               "key": "acc_z",
               "label": "Accelerometer",
               "formatFunction":  function(data, self) { return vm.accelerometerFormatData(data, self) },
               "size": {sizeX: 4, sizeY: 6 },
               "type": "accelerometer"
        	},**/
        
            {
               "key": "acc_x",
               "label": "Acceleration X (g)",
               "formatFunction":  function(data, self) { return vm.accXFormatData(data, self) },
               "size": {sizeX: 2, sizeY: 1 },
               "noHeader": true,
               "type": "accelerometer"
        	},
             {
               "key": "acc_y",
               "label": "Acceleration Y (g)",
               "formatFunction":  function(data, self) { return vm.accXFormatData(data, self) },
               "size": {sizeX: 2, sizeY: 1 },
               "noHeader": true,
               "type": "accelerometer"
        	},
             {
               "key": "acc_z",
               "label": "Acceleration Z (g)",
               "formatFunction":  function(data, self) { return vm.accXFormatData(data, self) },
               "size": {sizeX: 2, sizeY: 1 },
               "noHeader": true,
               "type": "accelerometer"
        	},
            
                 
        ];
    
    vm.changeView = function(value) {
        vm.view = value;
    };
    
    vm.init = function(){
        if($routeParams && $routeParams.deviceId) {
            vm.deviceKey = $routeParams.deviceId;
            vm.params = {"id":  vm.deviceKey }
            
            vm.tag = "dashboard_" +  vm.deviceKey;
            
           $timeout(function(){
               wsClient.subscribe(vm.tag, vm.consumeData.bind(vm), $scope.$id);  
            
                httpClient.get("app/api/getLatestDevice", vm.params).then(
                    function(data, response) {
                        vm.consumeData(data)
                    },
                    function(err) {
                        console.log('ERROR', error);
                    });

                httpClient.get("app/api/getDeviceHistory", vm.params).then(
                    function(data, response) {
                        vm.consumeHistoricalData(data)
                    },
                    function(err) {
                        console.log('ERROR', error);
                });
           },1000);
        }
        
        vm.historicalItems = [
        {
           "key": "temperature",
           "label": "Temperature",
           "colorsMapping": [{"labels":"Temperature","colors":"#ad7fa8","axisSelection":"y","unit":"°C"}],
           "apiParams": {
                "query": [
                    {
                        "sensor": ['temperature'],
                        "device": vm.deviceKey 
                    }
                ],
                "format": 'dygraphs'
            },
            formatFunction:  vm.checkDygraphsTemperatureData
        },
        {
           "key": "humidity",
           "label": "Humidity",
           "colorsMapping": [{"labels":"Humidity","colors":"#ad7fa8","axisSelection":"y","unit":"%"}],
           "apiParams": {
                "query": [
                    {
                        "sensor": ['humidity'],
                        "device": vm.deviceKey 
                    }
                ],
                "format": 'dygraphs'
            },
            formatFunction:  vm.checkDygraphsHumidityData
        },
        {
           "key": "pressure",
           "label": "Pressure",
           "colorsMapping": [{"labels":"Pressure","colors":"#ad7fa8","axisSelection":"y","unit":"hPa"}],
           "apiParams": {
                "query": [
                    {
                        "sensor": ['pressure'],
                        "device": vm.deviceKey 
                    }
                ],
                "format": 'dygraphs'
            },
            formatFunction:  vm.checkDygraphsPressureData
        },
        {
           "key": "co2",
           "label": "Co2",
           "colorsMapping": [{"labels":"Co2","colors":"#ad7fa8","axisSelection":"y","unit":"ppm"}],
           "apiParams": {
                "query": [
                    {
                        "sensor": ['co2'],
                        "device": vm.deviceKey 
                    }
                ],
                "format": 'dygraphs'
            },
            formatFunction:  vm.checkDygraphsCo2Data
        },
        {
           "key": "tvoc",
           "label": "TVOC",
           "colorsMapping": [{"labels":"TVOC","colors":"#ad7fa8","axisSelection":"y","unit":"Index"}],
           "apiParams": {
                "query": [
                    {
                        "sensor": ['tvoc'],
                        "device": vm.deviceKey 
                    }
                ],
                "format": 'dygraphs'
            },
            formatFunction:  vm.checkDygraphsTvocData
        },
        {
           "key": "particulate",
           "label": "Particulate",
           "colorsMapping": [{"labels":"PM 1.0","colors":"#ad7fa8","axisSelection":"y","unit":"μg/m3"},{"labels":"PM 2.5","colors":"#e25b3c","axisSelection":"y","unit":"μg/m3"},{"labels":"PM 10.0","colors":"#c8d106","axisSelection":"y","unit":"μg/m3"}],
           "apiParams": {
                "query": [
                    {
                        "sensor": ['pm1_0','pm2_5','pm10_0'],
                        "device": vm.deviceKey 
                    }
                ],
                "format": 'dygraphs'
            },
            formatFunction:  vm.checkDygraphsParticulateData
        },
        {
           "key": "acceleration",
           "label": "Acceleration",
           "colorsMapping": [{"labels":"Acc X","colors":"#ad7fa8","axisSelection":"y","unit":"g"},{"labels":"Acc Y","colors":"#e25b3c","axisSelection":"y","unit":"g"},{"labels":"Acc Z","colors":"#c8d106","axisSelection":"y","unit":"g"}],
           "apiParams": {
                "query": [
                    {
                        "sensor": ['acc_x','acc_y','acc_z'],
                        "device": vm.deviceKey 
                    }
                ],
                "format": 'dygraphs'
            },
            formatFunction:  vm.checkDygraphsAccelerationData
        },
            
        {
           "key": "noise",
           "label": "Noise",
           "colorsMapping": [{"labels":"Noise","colors":"#ad7fa8","axisSelection":"y","unit":"db"}],
           "apiParams": {
                "query": [
                    {
                        "sensor": ['noise'],
                        "device": vm.deviceKey 
                    }
                ],
                "format": 'dygraphs'
            },
            formatFunction:  vm.checkDygraphsNoiseData
        }
            
      ]
    }

    vm.heatmapFormatData = function(data) {
      var splitArrayIntoChunksOfLen = function(arr, len) {
          var chunks = [], i = 0, n = arr.length;
          while (i < n) {
            chunks.push(arr.slice(i, i += len));
          }
          return chunks;
        }
      
        return {
            x : [1,2,3,4,5,6,7,8],
            y : [1,2,3,4,5,6,7,8],
            z : splitArrayIntoChunksOfLen(JSON.parse(data.latest.grideye), 8)

        };
   }

    

    vm.consumeHistoricalData = function(data) {
        vm.historicalData = data;
    }
    
    vm.consumeData = function(data) {
        if(data && data[vm.deviceKey] && data[vm.deviceKey][0] && data[vm.deviceKey][0][0]) {
            vm.selectedDevice = data[vm.deviceKey][0][0];
		 }
    }
    
    vm.checkDygraphsTemperatureData = function(data){
        if(data instanceof Array){
            return data;
        }else{
            return [[
                moment().valueOf(),
                data.latest.temperature
            ]];
        } 
    }
    
    vm.checkDygraphsHumidityData = function(data){
        if(data instanceof Array){
            return data;
        }else{
            return [[
                moment().valueOf(),
                data.latest.humidity
            ]];
        } 
    }
    
    vm.checkDygraphsCo2Data = function(data){
        if(data instanceof Array){
            return data;
        }else{
            return [[
                moment().valueOf(),
                data.latest.co2
            ]];
        } 
    }
    
    vm.checkDygraphsPressureData = function(data){
        if(data instanceof Array){
            return data;
        }else{
            return  [[
                moment().valueOf(),
                data.latest.pressure
            ]];
        }
    }
    
    vm.checkDygraphsTvocData = function(data){
        if(data instanceof Array){
            return data;
        }else{
            return  [[
                moment().valueOf(),
                data.latest.tvoc
            ]];
        }
    }
    
    vm.checkDygraphsAccelerationData = function(data){
        if(data instanceof Array){
            return data;
        }else{
            return  [[
                moment().valueOf(),
                data.latest.acc_x,
                data.latest.acc_y,
                data.latest.acc_z
            ]];
        }
    }
    
     vm.checkDygraphsParticulateData = function(data){
        if(data instanceof Array){
            return data;
        }else{
            return  [[
                moment().valueOf(),
                data.latest.pm1_0,
                data.latest.pm2_5,
                data.latest.pm10_0
            ]];
        }
    }
    vm.checkDygraphsNoiseData = function(data){
        if(data instanceof Array){
            return data;
        }else{
            return  [[
                moment().valueOf(),
                data.latest.noise
            ]];
        }
    }
    
    vm.checkDygraphsVibrationData = function(data){
        if(data instanceof Array){
            return data;
        }else{
            return  [[
                moment().valueOf(),
                data.latest.vibration
            ]];
        }
    }
    
    vm.checkDygraphsParticleData = function(data){
        if(data instanceof Array){
            return data;
        }else{
            return  [[
                moment().valueOf(),
                data.latest.particulate
            ]];
        }
    }
    
    vm.checkDygraphsGyrData = function(data){
        if(data instanceof Array){
            return data;
        }else{
            return  [[
                moment().valueOf(),
                data.latest.gyr_x,
                data.latest.gyr_y,
                data.latest.gyr_z
            ]];
        }
    }
    
    vm.historicalFormatData = function(data){
        if(data.historical) 
            return data.historical;
        else
            return data;
    }  

    vm.grideyeFormatData = function(data){
        return JSON.parse(data);
    }
    
    vm.temperatureFormatData = function(data) {
        return data.latest.temperature;
    }
    
    vm.pressureFormatData = function(data){
        return data.latest.pressure;
    }

    vm.humidityFormatData = function(data){
        return data.latest.humidity;
    }
    
    vm.proximityFormatData = function(data){
        return data.latest.proximity;
    }
    
    vm.tvocFormatData = function(data){
        return data.latest.tvoc;
    }
    
    vm.co2FormatData = function(data){
        return data.latest.co2;
    }
    
    
    vm.noiseFormatData =  function(data) {
        return data.latest.noise;
    }
    
    vm.pm25FormatData = function(data) {
        return data.latest.pm2_5;
    }
    
     vm.pm10FormatData = function(data) {
        return data.latest.pm10_0;
    }
     vm.pm1FormatData = function(data) {
        return data.latest.pm1_0;
    }
    
    vm.accelerometerFormatData= function(data){
        if(data instanceof Array){
            var latest = data[data.length - 1];
            return {"x": latest.acc_x, "y": latest.acc_y, "z": latest.acc_z};
        }else{
            return {"x": data.latest.acc_x, "y": data.latest.acc_y, "z": data.latest.acc_z};
        }
    }
    
    
    vm.accXFormatData= function(data){
        return {"value" : data.latest.acc_x};
    }
    
    vm.accYFormatData= function(data){
        return {"value" : data.latest.acc_y};
    }
    
    vm.accZFormatData= function(data){
        return {"value" : data.latest.acc_z};
    }
    
    vm.callback = function(data){
        return data;
    }
    
});






