import angular from 'angular';

angular
.module('single-spa-app', []);

angular
  .module('single-spa-app')
  .component('root', {
    template: '<h1 style="margin-top: 100px;">Hello from the {{vm.name}} Angularjs 1.x!</h1>',
    controllerAs: 'vm',
    controller: function() {
      var vm = this;

      vm.name = "Supeheroic"

      vm.$onInit = function() {
        console.log("mounting root angular component")
      }

      vm.$onDestroy = function() {
        console.log('unmounting root angular component!')
      }
    }
  })