/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ovly/data/binding/curriculo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});