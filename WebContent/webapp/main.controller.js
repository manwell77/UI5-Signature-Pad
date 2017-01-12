sap.ui.define(["sap/ui/core/mvc/Controller",
	       	   "sap/m/Button",
	    	   "sap/m/Dialog",
	    	   "sap/ui/root/webapp/control/signaturePad"], 
		
	function (Controller,Button,Dialog,signaturePad) {
	
		"use strict";
   
		return Controller.extend("sap.ui.root.webapp.main", {
			
		
			onInit: function() {
		
			},
			
			onEnd: function(oEvent) {
				
			},
			
			onBegin: function(oEvent) {
				
			},
		
			onItemPressed: function(oEvent) 
			{   
				sap.ui.getCore().byId("app").to(oEvent.getSource().getId().substring(6));
			},			
		})
		
});