module Model {
    export class Topic {
        public hostUrl: string;
        public title: string;
        public id: number;
        public submissionTime: Date;
        public subreddit: string;
        public submitter: Model.Submitter;

        constructor(id: number, title: string, hostUrl: string, submissionTime: Date, subreddit: string, submitter: Model.Submitter) {
            if (!_.isNumber(id)) { throw new Error('id must be defined and a number'); }
            if (!_.isString(title)) { throw new Error('title must be defined and a string'); }
            if (!_.isString(hostUrl)) { throw new Error('hostUrl must be defined and a string'); }
            if (!_.isDate(submissionTime)) { throw new Error('submissionTime must be defined and a date'); }
            if (!_.isString(subreddit)) { throw new Error('subreddit must be defined and a string'); }
            if (_.isUndefined(submitter)) { throw new Error('submitter must be defined'); }

            this.hostUrl = hostUrl;
            this.title = title;
            this.id = id;
            this.submissionTime = submissionTime;
            this.subreddit = subreddit;
            this.submitter = submitter;
        }
    }
} 