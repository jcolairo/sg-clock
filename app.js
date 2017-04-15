function MainRouter ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './index.html'
    });

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular
  .module('ClockApp', ['ui.router'])
  .config(MainRouter);
