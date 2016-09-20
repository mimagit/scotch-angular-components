(function() {
    var app = angular.module('app', []);
    
    // A controller that dispalys hello world
    app.controller('HomeCtrl', function() {
       this.message = "Some msg"; 
    });
})();