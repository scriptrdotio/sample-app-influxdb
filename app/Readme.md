# Device Agnostic App
The device agnostic app is meant to jump start your development with scriptr.io and any device you have. It's a complete end-to-end scenario that allows you to connect your device and view its live and historical data as you like.

# Features
The device agnostic app can be used to serve different industries. So far, you can use the application in the context of a:
- Smart kitchen,
- Live Stock fitbit,
- Smart Container Cold chain.

# Device Connection
Devices have multiple options to connect to the application:
- Through a broker, ex: DMP, Gateway...
- Directly over any of the supported protocols: MQTT, WS, AMQP & HTTPS


## Device Identification

The devices are identified:
- Either by the id passed in payload.
- or by the token passed to authenticate the request.

The "app/install/auto.install.scriptr" script onload the application with 2 devices:

- myDmpBroker: This device is to be used by dmp or gateway that communicate with your scriptr account on behalf of multiple devices.
- myDevice: This is a sample device definition that represents your device if you choose your device to communicate directly with scriptr whether by sending myDevice as id in the payload message or using myDevice token to authenticate the messages sent by your device.

The id prevails over the token if both are present in the request sent by device. This might happen in case the user has multiple devices, and wants to authenticate their scriptr requests using the same device authentication key. In such scenario, the device would send his id in every payload and is identified in scriptr by that id.


The default device data model is built from a template with default property values:
```
   { //This device is a virtual model of a physical device
    "id":"myDevice",
    "password" : "demo",
    "name" : "myDevice",
    "type": "hardware",
    "lat": 45.5307159, 
    "long": -73.8373892,
    "address": "Little Feet Meadow",
    "city": "Montreal",
    "country": "Canada",
    "locationType": "Ranch",
    "locationSection": "Neck Collar",
    "physicalEnvironment": "Cow",
    "sensor": "mySensorType",
    "source": "simulator"
}
```
To edit the property values of any of your scriptr account connected devices you can :
- go to Tools > Data Explorer > Devices.
- select your device and edit the fields.

Default properties values will be discarded if new values are available in the device payload.

## Device Payload 
The data communicated to scriptr.io account (the device payload) will be normalized into a specific data model used by the application. The "app/api/subscription/subscriber" script, tries to normalize the device payload through the available data transformations under app/config/<device-type>/dataTransformation script.
   ### Example
   Devices sends the below payload:
   ```
      { "pressure": 955.8,
         "temperature": 23.5, 
         "humidity": 57.4, 
         "luminosity": 3,
         "location":{
             "lat":40.6976701,
             "lon":-74.2598681
         },
         "batteryLevel": 254, 
         "deviceId": "01-01-01-01-01-01-01-01", 
         "time": "2019-02-12T18:07:05.605854Z", 
         "_msgid": "b72103fe.48df",
         "id":"myDevice"
        }
   ```
   The "app/api/subscibtion/subscriber" will normalize it into this data model to be stored and used by the application:
   ```
       {
         "pressure": 955.8,
         "temperature": 23.5,
         "humidity": 57.4,
         "luminosity": 3,
         "lat": 40.6976701,
         "long": -74.2598681,
         "battery": 254,
         "id": "01-01-01-01-01-01-01-01",
         "timestamp": "2019-02-12T18:07:05.605854Z"
      }
   ```
The app/config/<device-type>/dataTransformation scripts contain a visual mapper which maps the payload properties to output the expected data model format expected by the application.
   
# How to view the application
The installation API "app/install/auto.install.scriptr" needs to be executed once.

Preliminary to that you need to activate your bridge free trial and your message queuing free trial options 

If you registered with scriptr.io using a promocode, this script should have already been executed with the device type defined in the promocode.

The Installation API "app/install/auto.install.scriptr" to install the app dependencies:
- The channels needed by the application.
- A default subdomain for the account, if not available.
- Default credentials (demo/demo) to use for login.
- External End points and bridges when needed.
     
To visualize your device data in real-time, open the script "<app-theme>/view/html/login.html" and click View, then login with the demo/demo credentials. You will land on a map with a cluster view of the device whenever it starts pushing data.
<app-theme> can be one of:
- smartkitchen
- livestockfitbit
- smartcontainer
- assettracking

Zooming into the map and clicking on a marker will display an info window with the latest data the device has published. You can click on edit dashboard to view a detailed dashboard of a specific device.

Clicking on alerts lists all the logged events alerts from your devices.

As your device starts pushing data the dashboard and the map will reflect the new readings from your devices automatically.

# Dependencies
- Underscore module (if you registered with scriptr.io using a promotion code, this module should have already been installed).
- Hogan module (if you registered with scriptr.io using a promotion code, this module should have already been installed).

- Your application is deployed to your account with a package version of the [UIComponents](https://github.com/scriptrdotio/UIComponents) module which you can find under app/view/build/. If you wish to use an unpackaged version of the [UIComponents](https://github.com/scriptrdotio/UIComponents) module and modify it, replace index.html with index.unpackage.html and checkout the master branch of [UIComponents](https://github.com/scriptrdotio/UIComponents). Read more about it [here](https://github.com/scriptrdotio/https://github.com/scriptrdotio/device-agnostic-app/tree/master/app/view/build/Readme.md).

# About the code
This section gives you an overview of the structure of the application and describes the responsibilities of the different scripts and files that compose it.

## app/api folder
The api folder contains scripts that define the API of the application, i.e. they are used by clients, such as the user interface (UI) or the client application running on the devices.

- app/api/subscription/subscriber: this script is subscribed to the deviceDigest channel and would consume all the messages containing the measurements made by the device's sensors.
"app/api/subscription/subscriber" uses "entities/devicemanager" to persit the data. It uses "entities/deviceevaluator" to check for the occurrence of alerts. 
The script also uses "entities/devicePublisher" to publish the received data in real-time to the UI.
- api/getDeviceAlerts: this script is invoked by the UI to obtain the list of the alerts that were triggered for a device by the application. This list is actually obtained from "entities/deviceManager". Passing the "filter" parameter narrows the list to the alerts related to the device with and id matching the value of "filter". 
- api/getDeviceHistory: this script is invoked by the UI to obtain the list of all the events that occurred through time for a device. 
- api/getLatestDevices: this script is invoked by the UI to obtain the latest events of all devices.

## /entities folder
This folder contains the scripts that implement the business logic and business rules of the application. 

- /entities/deviceManager: this script is responsible for managing device data and persiting them in the "Default" data store of your account (**note:** to view your data stores, click on "Tools" in the scriptr.io workspace toolbar, then click on "Data Explorer").
- /entities/deviceevaluator: the deviceEvaluator receives device data and applies business rules on them to determine if an alert should be raised. Business rules are defined in a decision table ("/entities/rules/decisionTable"), which is loaded and executed by the entities/deviceevaluator script (**note:** decision tables are standalone API, i.e. you can send them requests - e.g. http requests - or you can execute them from within a script by using the **sdtLibScript.execute()** utility. Check "/entities/utils" for details)
- /entities/devicePublisher: the devicePublisher reads the latest updates from the deviceManager, transforms them into a format that suits the expectations of the charts in the UI, and broadcasts them to the latter by publishing the data into the "responseChannel"  channel (**note:** we use channels in scriptr.io to broadcast messages in real-time to other components, such as for example UI components). The charts in the UI are subscribed to the channel upon installation of the application and therefore, will automatically reflect data updates as soon as they are ingested (app/api/subscription/subscriber).
- /entities/utils: a utility script that contains utility functions, such as format(), to transform incoming device data into a structure that is expected by the UI
-/entities/rules/decisionTable: a decision table that defines the conditions to generate an alert (some threshold values). You can modify these rules visually from the scriptr.io workspace (the script opens in a decision table editor)

## /entities/actions
This folder contains two utility scripts for applying email templates.
- /entities/actions/emailOnAlert: a simple script that applies an email template to some content, before sending it using scriptr.io's  built-in "sendMail()" function
- /entities/actions/templates: simple email template definition for alerts

## /config
This folder contains the application configuration
- /cleanup/devicesEvents: a simple script that cleans up the events of all devices in order to keep the events number per device to 50 at all time on the scriptr.io free tier.

## /cleanup
This folder contains a script to cleanup the devices events data
- /cleanup/devicesEvents: a simple script that cleans up the events of all devices in order to keep the events number per device to 50 at all time on the scriptr.io free tier.

## /view folder
This folder contains the scripts that define the User Interface of the application. The scripts are distributed into three seperate sub-folders depending on their type: "/html" for the HTML pages, "/javascript" for the controllers (MVC design) and "/css" for the look and feel. Note that the UI is leveraging a subset of scriptr.io's UI component, which has been pre-packed for this demo application.

### /view/html

Based on your selected entry point the below pages will be parsed with the appropriate theme.

- /view/html/index.html: this page is the template of the application's UI: it is composed of a header, a menu on the left-side, and a content section, within which different pages will be displayed depending on the action triggered by the user of the application.
- /view/html/login.html, /view/html/logout.html: these pages are used for the login/logout process. They are part of the login component that you can install as a separate module.

#### /view/html/views/main
- view/html/views/main/main.html: the main content, composed of a map widget showing the location of the devices (assuming the devices are sending location data. If you have an mDot-Box device, switch to the GPS Survey mode to receive the location of your device)
- view/html/views/main/info_generic.html: this is an info window shown when clicking on a device marker on the map
- /html/views/main/dashboard.html:  the dashboard that displays the latest values received from the Conduit device as well as the historical data (i.e. the different values through time)

#### /view/html/
- /view/html/views/alerts/alerts.html: grid that displays the list of alerts that were generated when receiving device data (alerts are generated depending on the business rules defined in "/entities/rules/alerts"
- Columns displayed in the alerts grid are defined in the <app-theme>/view/javascript/constants unders alertsGrid key
```
   alertsGrid: [
      {headerName: "Temperature", field: "temperature", cellRenderer: function(params){return params.value + " °C"}},
      {headerName: "Humidity", field: "humidity", cellRenderer: function(params){return params.value  + " %"}},
      {headerName: "Pressure", field: "pressure", cellRenderer: function(params){return params.value + " Pa"}},
      {headerName: "Proximity", field: "proximity", cellRenderer: function(params){return params.value + " mm"}},
      {headerName: "Accelerometer", field: "acc_x", cellRenderer: function(params){return params.value + ", "+ params.data.acc_y+", "+params.data.acc_z}},
      {headerName: "Gyroscope", field: "gyr_x", cellRenderer: function(params){return params.value + ", "+ params.data.gyr_y+", "+params.data.gyr_z}},
      {headerName: "Magnetometer", field: "mag_x", cellRenderer: function(params){return params.value + ", "+ params.data.mag_y+", "+params.data.mag_z}},
      {headerName: "Timestamp", field: "creationDate"},
      {headerName: "Alerts", field: "alert_type", cellStyle: {'white-space': 'normal', 'word-break': 'break-all'}},
  ]
  
```
The field entry for each column definition refers to the data stored to each device event. 

### /view/javascript
The device-agnostic-app application leverages Angular.js and therefore adopts the corresponding MVC implementation. This folder contains the definition of the application's controllers.

- view/javascript/module.js: implements the routing logic of the menu
- view/javascript/controller.js: the main controller of the application
- view/javascript/layout.js: defines the items used in the header, menu and header of the application
- view/javascript/config.js: configuration of the application (http and websocket providers)

