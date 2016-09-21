(function() {
    'use strict'
    
    angular.module('accordion').component('accordion', {
        transclude: true,
        templateUrl: 'js/accordion/accordion.template.html',
        controller: AccordionController
    });
    
    function AccordionController(){
        var self = this;
        var panels = [];
        
        // add  panels
        self.addPanel = function(panel) {
            panels.push(panel);
            
            // preselect panel
            if(panels.length > 0) {
                panels[0].turnOn();
            }
        };
        
        // select panel
        self.selectPanel = function(panel) {
            for(var i in panels) {
                if(panel === panels[i]) {
                    panels[i].turnOn();
                }
                else {
                    panels[i].turnOff();
                }
            }
        };
    }
    
})();