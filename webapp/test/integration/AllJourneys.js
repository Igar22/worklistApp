/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/worklistApp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/worklistApp/test/integration/pages/Worklist",
	"zjblessons/worklistApp/test/integration/pages/Object",
	"zjblessons/worklistApp/test/integration/pages/NotFound",
	"zjblessons/worklistApp/test/integration/pages/Browser",
	"zjblessons/worklistApp/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.worklistApp.view."
	});

	sap.ui.require([
		"zjblessons/worklistApp/test/integration/WorklistJourney",
		"zjblessons/worklistApp/test/integration/ObjectJourney",
		"zjblessons/worklistApp/test/integration/NavigationJourney",
		"zjblessons/worklistApp/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});