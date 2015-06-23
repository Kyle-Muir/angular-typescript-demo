var app = angular.module('redditCloneApp');
module Services {
    'use strict';

    export interface ITopicRepository {
        loadTopic(id: number): ng.IPromise<any>;
        loadTopics(): ng.IPromise<any>;
    }

    class TopicRepository implements ITopicRepository {
        constructor(private $http: ng.IHttpService) { }

        public loadTopic = (id: number): ng.IPromise<any> => {
            var data = {
                id: id
            };
            return this.$http.post('http://localhost:52558/api/RedditClone/Get', data).then((resp) => {

                return resp.data;
            });
        }

        public loadTopics = (): ng.IPromise<any> => {
            return this.$http.get('http://localhost:52558/api/RedditClone').then((resp) => {
                return resp.data;
            });
        }
    }
    app.service('topicRepository', TopicRepository);
}
