/* global document */
sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/Device",
		"zjblessons/worklistApp/model/models",
		"zjblessons/worklistApp/controller/ErrorHandler"
	], function (UIComponent, Device, models, ErrorHandler) {
		"use strict";

		return UIComponent.extend("zjblessons.worklistApp.Component", {

			metadata : {
				manifest: "json"
			},

			init : function () {
				UIComponent.prototype.init.apply(this, arguments);

				this._oErrorHandler = new ErrorHandler(this);

				this.setModel(models.createDeviceModel(), "device");

				this.getRouter().initialize();
			},

			destroy : function () {
				this._oErrorHandler.destroy();
				UIComponent.prototype.destroy.apply(this, arguments);
			},

			getContentDensityClass : function() {
				if (this._sContentDensityClass === undefined) {
					if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
						this._sContentDensityClass = "";
					} else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
						this._sContentDensityClass = "sapUiSizeCompact";
					} else {
						this._sContentDensityClass = "sapUiSizeCozy";
					}
				}
				return this._sContentDensityClass;
			}

		});

	}
);