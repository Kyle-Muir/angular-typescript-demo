module Builder {
    export class TopicBuilder {
        public static buildTopic(topic: Integration.IRedditTopic): Model.Topic {
            var submitter = new Model.Submitter(topic.Submitter.Id, topic.Submitter.Name);
            return new Model.Topic(topic.Id, topic.Title, topic.HostUrl, new Date(topic.SubmissionTime), topic.Subreddit, submitter);
        }

        public static buildTopics(topics: Array<Integration.IRedditTopic>): Array<Model.Topic> {
            var items = [];
            _.each(topics, (item: Integration.IRedditTopic) => {
                items.push(this.buildTopic(item));
            });
            return items;
        }
    }
} 