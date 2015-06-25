var app;
(function (app) {
    'use strict';
    var Config = (function () {
        /** @ngInject */
        function Config($logProvider) {
            // enable log
            $logProvider.debugEnabled(true);
        }
        return Config;
    })();
    app.Config = Config;
})(app || (app = {}));
//# sourceMappingURL=index.config.js.map