require.config({ 
     baseUrl:'/js/src',
       paths: { 
           jquery:'../lib/jquery/dist/jquery.min', 
           underscore:'../lib/underscore/underscore', 
           backbone:'../lib/backbone/backbone', 
      bootstrap:'../lib/bootstrap/dist/js/bootstrap' 
    }, 
    shim: { 
        bootstrap:{ 
            deps:['jquery'], 
            exports:'$.fn.popover' 
        } 
    } 
});  
                        
define(['router'], function (Router) {
    var r = new Router();
});
