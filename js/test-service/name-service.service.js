(function() {
    'use strict'
    
    angular.module('nameService').service('nameService', function() {
        var self = this;
        
        self.name = "Miroslav Stancic";
        
        self.nameLenght = function() {
            return self.name.length;
        };
        
    });
    
})();