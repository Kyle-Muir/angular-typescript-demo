var app;
(function (app) {
    'use strict';
    var RouterConfig = (function () {
        /** @ngInject */
        function RouterConfig($stateProvider, $urlRouterProvider) {
            $stateProvider.state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'mainController',
                controllerAs: 'main'
            });
            $urlRouterProvider.otherwise('/');
        }
        return RouterConfig;
    })();
    app.RouterConfig = RouterConfig;
})(app || (app = {}));
//# sourceMappingURL=index.route.js.map