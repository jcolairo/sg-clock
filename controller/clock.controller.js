function ClockController($timeout) {
  var controller = this;

  controller.tickInterval = 1000;

  var clockInfo = function() {
    controller.clock = Date.now();
    $timeout(clockInfo, controller.tickInterval);
  };

  function init() {
    $timeout(clockInfo, controller.tickInterval);
  }
  init();
}

ClockController.$inject = ['$timeout'];

angular
  .module('ClockApp')
  .controller('ClockController', ClockController, ['interval']);
