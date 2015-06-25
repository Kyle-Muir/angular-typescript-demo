module Integration {
    'use strict';
     export interface IRedditTopic {
         HostUrl: string;
         Id: number;
         Title: string;
         SubmissionTime: string;
         Submitter: IRedditSubmitter;
         Subreddit: string;
         TopicUrl: string;
         Upvotes: number;
     }
 }