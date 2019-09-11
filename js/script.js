'use strict';

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

var getFireballSpeed = function (left) {
  if (left === true) {
    return 5;
  } else {
    return 2;
  }
};
getFireballSpeed();

var getWizardHeight = function () {
  var wizardHeight = 1.337 * wizardWidth;
  return wizardHeight;
};
getWizardHeight();

var getWizardX = function (width) {
  width = width / 2;
  return width;
};
getWizardX();


var getWizardY = function (height) {
  height = height * 2/3;
  return height;
};
getWizardY();
