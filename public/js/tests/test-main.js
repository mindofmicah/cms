 var tests = [];
 for(var file in window.__karma__.files) {
     if(window.__karma__.files) {
         if (/Spec\.js$/.test(file)) {
             tests.push(file);
         }
     }
 }

 requirejs.config({
     baseUrl:'/base/public/js/src',
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
     },
     deps:tests,
    callback: window.__karma__.start
 });
