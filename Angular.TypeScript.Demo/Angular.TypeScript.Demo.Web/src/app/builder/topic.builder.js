var Builder;
(function (Builder) {
    var TopicBuilder = (function () {
        function TopicBuilder() {
        }
        TopicBuilder.buildTopic = function (topic) {
            var submitter = new Model.Submitter(topic.Submitter.Id, topic.Submitter.Name);
            return new Model.Topic(topic.Id, topic.Title, topic.HostUrl, new Date(topic.SubmissionTime), topic.Subreddit, submitter, topic.Upvotes);
        };
        TopicBuilder.buildTopics = function (topics) {
            var _this = this;
            var items = [];
            _.each(topics, function (item) {
                items.push(_this.buildTopic(item));
            });
            return items;
        };
        return TopicBuilder;
    })();
    Builder.TopicBuilder = TopicBuilder;
})(Builder || (Builder = {}));
//# sourceMappingURL=topic.builder.js.map