/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"xinlei/demo/m3ui/m3ui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});