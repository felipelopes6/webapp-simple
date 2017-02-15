// =============================================================================
// Main JS Application
// =============================================================================

var APP = {
    init: function() {
        this.start();
    },

    start: function(){
       console.log('jQuery is working');
    }
};

$(function($){
    APP.init();
});