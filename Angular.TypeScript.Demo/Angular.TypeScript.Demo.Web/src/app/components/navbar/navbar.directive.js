var app;
(function (app) {
    'use strict';
    /** @ngInject */
    function navbar() {
        return {
            restrict: 'E',
            scope: {
                creationDate: '='
            },
            templateUrl: 'app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    app.navbar = navbar;
    /** @ngInject */
    var NavbarController = (function () {
        function NavbarController(moment) {
            this.relativeDate = moment(1435221344780).fromNow();
        }
        return NavbarController;
    })();
})(app || (app = {}));
//# sourceMappingURL=navbar.directive.js.map