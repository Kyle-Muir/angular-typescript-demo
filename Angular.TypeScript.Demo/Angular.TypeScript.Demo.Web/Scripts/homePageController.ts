var app = angular.module('redditCloneApp');

module Controller {
    export class HomePageController {
        public topicList: Array<Model.Topic>;

        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // this is to ensure you can still minify your controllers after using typescript.
        // $inject is not needed if you have no plans of minifying your code - implicit injection will still 
        // pick your services, etc up.
        // See http://docs.angularjs.org/guide/di - $inject Property Annotation
        public static $inject = ['topicRepository'];
        constructor(private topicRepository: Services.ITopicRepository) {
            this.loadAllTopics();
        }

        public loadAllTopics = (): void => {
            this.topicRepository.loadTopics().then((resp: Array<Model.Topic>) => {
                this.topicList = resp;
            });
        }
    }
}

app.controller('homePageController', Controller.HomePageController);