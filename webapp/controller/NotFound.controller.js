sap.ui.define([
		"zjblessons/worklistApp/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zjblessons.worklistApp.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);