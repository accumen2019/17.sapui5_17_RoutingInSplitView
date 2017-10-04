sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DemoRouting2DemoRouting2.controller.Master", {
     onNavBack:function(){

     	history.go(-1); //this will also take back to the previous page
			
     }
     });
});