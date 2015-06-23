var app = angular.module('redditCloneApp');

module Controller {
    export class HomePageController {
        public topicList: Array<any>;

         constructor(private topicRepository: Services.ITopicRepository) {
             this.loadAllTopics();
         }

         public loadAllTopics = () => {
             this.topicRepository.loadTopics().then((resp) => {
                 this.topicList = resp;
             });
         }
     }
}

app.controller('homePageController', Controller.HomePageController);