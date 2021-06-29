/*global QUnit*/

sap.ui.define([
	"namespacerb/projectorb/controller/ViewRB.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewRB Controller");

	QUnit.test("I should test the ViewRB controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
