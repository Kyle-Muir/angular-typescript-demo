﻿module app {
    'use strict';

    export interface ITopicService {
        loadTopic(id: number): ng.IPromise<Model.Topic>;
        loadTopics(): ng.IPromise<Array<Model.Topic>>;
    }

    export class TopicService implements ITopicService {
        constructor(private $http: ng.IHttpService) { }

        public loadTopic = (id: number): ng.IPromise<Model.Topic> => {
            var data = {
                id: id
            };
            return this.$http.post('http://localhost:52558/api/RedditClone', data).then((resp: Integration.IGenericHttpResponse<Integration.IRedditTopic>) => {
                var redditTopic = resp.data;
                return Builder.TopicBuilder.buildTopic(redditTopic);
            });
        }

        public loadTopics = (): ng.IPromise<Array<Model.Topic>> => {
            return this.$http.get('http://localhost:52558/api/RedditClone').then((resp: Integration.IGenericHttpResponse<Array<Integration.IRedditTopic>>) => {
                return Builder.TopicBuilder.buildTopics(resp.data);
            });
        }
    }
} 