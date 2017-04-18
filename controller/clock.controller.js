function ClockController($timeout) {
  var controller = this;

  controller.secondInterval = 1000;
  controller.minuteInterval = 60000;
  controller.hourInterval = 600000;

  var clockInfo = function() {
    controller.clock = Date.now();
    $timeout(clockInfo, controller.secondInterval);
  };

  function init() {
    $timeout(clockInfo, controller.secondInterval);
  }
  init();
}

ClockController.$inject = ['$timeout'];

angular
  .module('ClockApp')
  .controller('ClockController', ClockController);
