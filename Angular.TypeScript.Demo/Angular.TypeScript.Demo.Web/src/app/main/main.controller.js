var app;
(function (app) {
    'use strict';
    var MainController = (function () {
        /*@ngInject*/
        function MainController(topicService) {
            var _this = this;
            this.topicService = topicService;
            this.loadAllTopics = function () {
                _this.topicService.loadTopics().then(function (resp) {
                    _this.topicList = resp;
                });
            };
            this.loadAllTopics();
        }
        return MainController;
    })();
    app.MainController = MainController;
})(app || (app = {}));
//# sourceMappingURL=main.controller.js.map