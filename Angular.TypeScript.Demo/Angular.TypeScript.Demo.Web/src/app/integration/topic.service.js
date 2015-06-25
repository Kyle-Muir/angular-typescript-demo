var Services;
(function (Services) {
    'use strict';
    var TopicService = (function () {
        function TopicService($http) {
            var _this = this;
            this.$http = $http;
            this.loadTopic = function (id) {
                var data = {
                    id: id
                };
                return _this.$http.post('http://localhost:52558/api/RedditClone', data).then(function (resp) {
                    var redditTopic = resp.data;
                    return Builder.TopicBuilder.buildTopic(redditTopic);
                });
            };
            this.loadTopics = function () {
                return _this.$http.get('http://localhost:52558/api/RedditClone').then(function (resp) {
                    return Builder.TopicBuilder.buildTopics(resp.data);
                });
            };
        }
        return TopicService;
    })();
    Services.TopicService = TopicService;
    angular.module('app').service('TopicService', Services.TopicService);
})(Services || (Services = {}));
//# sourceMappingURL=topic.service.js.map