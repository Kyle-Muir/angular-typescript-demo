var Model;
(function (Model) {
    var Topic = (function () {
        function Topic(id, title, hostUrl, submissionTime, subreddit, submitter, upvotes) {
            if (!_.isNumber(id)) {
                throw new Error('id must be defined and a number');
            }
            if (!_.isString(title)) {
                throw new Error('title must be defined and a string');
            }
            if (!_.isString(hostUrl)) {
                throw new Error('hostUrl must be defined and a string');
            }
            if (!_.isDate(submissionTime)) {
                throw new Error('submissionTime must be defined and a date');
            }
            if (!_.isString(subreddit)) {
                throw new Error('subreddit must be defined and a string');
            }
            if (_.isUndefined(submitter)) {
                throw new Error('submitter must be defined');
            }
            if (!_.isNumber(upvotes)) {
                throw new Error('upvotes must be defined and a number');
            }
            this.hostUrl = hostUrl;
            this.title = title;
            this.id = id;
            this.submissionTime = submissionTime;
            this.subreddit = subreddit;
            this.submitter = submitter;
            this.upvotes = upvotes;
        }
        return Topic;
    })();
    Model.Topic = Topic;
})(Model || (Model = {}));
//# sourceMappingURL=topic.js.map