define(['router', 'backbone'], function (Router, Backbone) {
    describe('Router', function () {

        it('should exist', function () {
            expect(Router).toBeDefined();
        }); 
        it('should have an app associated with it', function () {
            expect(new Router().app).toBeDefined();
        });
        it('should have an app that is a view', function () {
            expect(new Router().app instanceof Backbone.View).toEqual(true);
        });
        it('should be a valid Backbone router', function () {
            expect(new Router() instanceof Backbone.Router).toEqual(true);
        });
        it('has a "home" route', function () {
            expect(new Router().routes['']).toEqual('home');
        });

        describe('router', function () {
            beforeEach(function () {
                try{
                    Backbone.history.start({silent:true, pushState:true});
                } catch(e) {
                    this.router.navigate('elsewhere');
                }
            });
            it('fires the index route with a blank hash', function () {
                var router = new Router;
                var route_spy = sinon.spy();
                router.bind('route:home', route_spy);
                router.navigate('', true);
                expect(route_spy.called).toEqual(true);;
            });
        });
    });
});
