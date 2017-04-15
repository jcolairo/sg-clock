function ClockController($timeout) {
  var controller = this;

  controller.tickInterval = 1000;

  var tick = function() {
    controller.clock = Date.now();
    $timeout(tick, controller.tickInterval);
  };

  function init() {
    $timeout(tick, controller.tickInterval);
  }
  init();
}

ClockController.$inject = ['$timeout'];

angular
  .module('ClockApp')
  .controller('ClockController', ClockController, ['interval']);
