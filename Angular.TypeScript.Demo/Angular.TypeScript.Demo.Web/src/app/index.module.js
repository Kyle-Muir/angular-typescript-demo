/// <reference path="../../.tmp/typings/tsd.d.ts" />
var app;
(function (app) {
    'use strict';
    angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap']).config(app.Config).config(app.RouterConfig).run(app.RunBlock).service('topicService', app.TopicService).controller('mainController', app.MainController);
})(app || (app = {}));
//# sourceMappingURL=index.module.js.map