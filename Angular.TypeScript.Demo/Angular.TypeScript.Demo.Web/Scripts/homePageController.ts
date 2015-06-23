var app = angular.module('redditCloneApp');

module Controller {
    export class HomePageController {
        public topicList: Array<Model.Topic>;

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