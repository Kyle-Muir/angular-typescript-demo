/// <reference path="../../.tmp/typings/tsd.d.ts" />

module app {
    'use strict';

    angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])

        .config(Config)

        .config(RouterConfig)

        .run(RunBlock)

        .service('topicService', TopicService)

        .controller('mainController', MainController);
}
