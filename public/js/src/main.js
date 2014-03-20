require.config({ 
    baseUrl: '/js/src',
    paths: { 
        jquery:     '../lib/jquery/dist/jquery.min', 
        underscore: '../lib/underscore/underscore', 
        backbone:   '../lib/backbone/backbone', 
        bootstrap:  '../lib/bootstrap/dist/js/bootstrap' 
    }, 
    shim: { 
        bootstrap: { 
            deps:    ['jquery'], 
            exports: '$.fn.popover' 
        } 
    } 
});

require(['jquery', 'backbone', 'router', 'app'], function ($, Backbone, Router, AppView) {
    'use strict';
    new Router({app: new AppView({el: $('#content')})});
    Backbone.history.start({pushState: true});
});
