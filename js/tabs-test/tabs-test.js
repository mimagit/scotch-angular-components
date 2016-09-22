// https://docs.angularjs.org/guide/component#intercomponent-communication

angular.module('myApp')
.component('myTabs', {
  transclude: true,
  controller: function MyTabsController() {
      
    var panes = this.panes = [];
      
    this.select = function(pane) {
      angular.forEach(panes, function(pane) {
        pane.selected = false;
      });
      pane.selected = true;
    };
      
    this.addPane = function(pane) {
      if (panes.length === 0) {
        this.select(pane);
      }
      panes.push(pane);
    };
      
      
  },
  templateUrl: 'js/tabs-test/my-tabs.html'
})
.component('myPane', {
  transclude: true,
  require: {
    tabsCtrl: '^myTabs'
  },
  bindings: {
    title: '@'
  },
  controller: function() {
      
    this.$onInit = function() {
      this.tabsCtrl.addPane(this);
      console.log(this);
    };
      
  },
  templateUrl: 'js/tabs-test/my-pane.html'
});