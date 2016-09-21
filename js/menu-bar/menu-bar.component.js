(function() {    
    'use strict'
    
    angular.module('menuBar').component('menuBar', {
        
        // Define a two way binding in and out of the component
        bindings: {
            brand: '@'
        },
        
        // Load the template
        templateUrl: 'js/menu-bar/menu-bar.template.html',
        
        controller: MenuBarController        
    });
    
    function MenuBarController() {       
        
        // A list of menus
        this.menuItems = [
            {
                name: "Home",
                component: "home"
            },
            {
                name: "About",
                component: "about"
            },
            {
                name: "Contact",
                component: "contact"
            }
        ];
    }   
    
})();