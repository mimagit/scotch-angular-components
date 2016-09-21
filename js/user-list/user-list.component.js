(function() {
    'use strict'
    
    angular.module('userList').component('userList', {
        // Binds caption to the parent scope
        bindings: {
            name: '<'
        },
        
        // Loads the component template
        templateUrl: "js/user-list/user-list.template.html",
        controller: UserListController        
    });
    
    function UserListController() {
        // The list of users we will be displaying
        this.users = [
            {
                name: "Alfreds Futterkiste",
                city: "Berlin",
                country: "Germany"
            },
            {
                name: "Anas Trujillo Emparedados y helados",
                city: "México D.F.",
                country: "Mexico"
            },
            {
                name: "Blondel père et fils",
                city: "Strasbourg",
                country: "France"
            }, 
            {
                name: "Bólido Comidas preparadas",
                city: "Madrid",
                country: "Spain"
            }
        ];        
    }
    
})();