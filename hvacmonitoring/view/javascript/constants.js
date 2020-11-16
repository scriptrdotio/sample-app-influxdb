myApp.constant("constants", {
  appTitle: "HVAC System Monitoring",
  login: {
    "background": "//s3.amazonaws.com/scriptr-cdn/hvac-monitoring/images/maintenanceBG.jpg",
    "logo": "//s3.amazonaws.com/scriptr-cdn/hvac-monitoring/images/small.png",
    "poweredBy": "//scriptr-cdn.s3.amazonaws.com/hvac-monitoring/images/powered-by-scriptr.png"

  },
   sources : {
    "simulator": { 
   	  "mapMarker": {
          url: "//s3.amazonaws.com/scriptr-cdn/hvac-monitoring/images/marker.png"
   	  }
    }
  },
  sourcesLabels: {
    "simulator": "Compagno add-on board"
  },
  infoWindows: {
    "icons": {
         "id": '<img width="30" height="30" src="//s3.amazonaws.com/scriptr-cdn/hvac-monitoring/images/team.png">',
         "address": '<img alt="Embedded Image"  src="//s3.amazonaws.com/scriptr-cdn/common/images/location.png" />',
         "locationType": '<img alt="Embedded Image"    src="//s3.amazonaws.com/scriptr-cdn/common/images/building.png" />',
         "time": '<img  alt="Embedded Image"    src="//s3.amazonaws.com/scriptr-cdn/common/images/time.png" />',
         "device": ' <img   alt="Embedded Image" src="//s3.amazonaws.com/scriptr-cdn/common/images/device.png">',
         "gyroscope": '//s3.amazonaws.com/scriptr-cdn/common/images/gyroscope.png',
         "co2": '//s3.amazonaws.com/scriptr-cdn/hvac-monitoring/images/co2.png',
         "tvoc": '//s3.amazonaws.com/scriptr-cdn/hvac-monitoring/images/tvoc.png',
         "particulate": '//s3.amazonaws.com/scriptr-cdn/hvac-monitoring/images/pm25.png',
         "vibration": '//s3.amazonaws.com/scriptr-cdn/hvac-monitoring/images/vibration.png',
         "noise": '//s3.amazonaws.com/scriptr-cdn/hvac-monitoring/images/noise.png',
         "temperature": '//s3.amazonaws.com/scriptr-cdn/common/images/temperature.png',
         "humidity": '//s3.amazonaws.com/scriptr-cdn/common/images/humidity.png',
         "pressure": '//s3.amazonaws.com/scriptr-cdn/common/images/pressure.png',
         "accelerometer": '//s3.amazonaws.com/scriptr-cdn/common/images/accelerometer.png'
     }
  },
  alertsGrid: [
      {headerName: "Temperature", field: "temperature", cellRenderer: function(params){return params.value + " " + ((params.data.temperature_unit) ? params.data.temperature_unit : "°C")} },
      
      {headerName: "Humidity", field: "humidity", cellRenderer: function(params){return params.value + " " +((params.data.humidity_unit) ? params.data.humidity_unit : "%")}},
      {headerName: "TVOC", field: "tvoc", cellRenderer: function(params){return params.value + " " +((params.data.humidity_unit) ? params.data.humidity_unit : "ppb")}},
      {headerName: "CO2", field: "co2", cellRenderer: function(params){return params.value + " " +((params.data.humidity_unit) ? params.data.humidity_unit : "ppm")}},
      {headerName: "Accelerometer", field: "acc_z", cellRenderer: function(params){return params.value + ", "+ params.data.acc_y+", "+params.data.acc_z}},
      
      {headerName: "Timestamp", field: "creationDate", cellStyle: {'white-space': 'normal', 'word-break': 'break-all'}, cellRenderer: function(params){return moment(params.value).format("DD-MM-YY hh:mm") }},
      
      {headerName: "Alerts", field: "alertType", cellStyle: {'white-space': 'normal', 'word-break': 'break-all'},  cellRenderer: function(params){
        try {
          var messages = "";
          if(typeof params.value == "object" && Array.isArray(params.value)){
            _.each(params.value, function(alert){
               //var json = JSON.parse(alert);
               messages += alert.message +"<br/>";
            })
           return messages +"<br/>";
          } else {
            var json = JSON.parse(params.value);
            return json.message +"<br/>";
          }
          
        } catch(error) {
            return params.value +"<br/>";
        }
           
      } , cellStyle: {'white-space': 'normal', 'word-break': 'break-all', 'background-color': '#ff9d00'}},
      {field: "acc_x", hide: true},
      {field: "acc_y", hide: true},
      {field: "acc_z", hide: true},
      {field: "temperature_unit", hide: true},
      {field: "humidity_unit", hide: true},
      {field: "pressure_unit", hide: true}
  ]
})