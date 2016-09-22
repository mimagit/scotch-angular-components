(function() {
    'use strict'
    
    angular.module('nameTest').component('nameTest', {
        template: '<div class="name-test">{{ "Name: " + $ctrl.name + ", Lenght: " + $ctrl.nameLenght }}</div>',
        controller: NameTestController
    });
    
    function NameTestController (nameService) {
        this.name = nameService.name;
        this.nameLenght = nameService.nameLenght();
    }
    
    NameTestController.$inject = ['nameService'];
    
})();