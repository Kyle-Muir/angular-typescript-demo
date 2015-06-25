var app;
(function (app) {
    'use strict';
    var RunBlock = (function () {
        /** @ngInject */
        function RunBlock($log) {
            $log.debug('runBlock end');
        }
        return RunBlock;
    })();
    app.RunBlock = RunBlock;
})(app || (app = {}));
//# sourceMappingURL=index.run.js.map