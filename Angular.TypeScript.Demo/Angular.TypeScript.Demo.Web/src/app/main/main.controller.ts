module app {
  'use strict';

  export class MainController {
      public topicList: Array<Model.Topic>;

      /*@ngInject*/
      constructor(private topicService: ITopicService) {
          this.loadAllTopics();
      }

      public loadAllTopics = (): void => {
          this.topicService.loadTopics().then((resp: Array<Model.Topic>) => {
              this.topicList = resp;
          });
      }
  }
}
