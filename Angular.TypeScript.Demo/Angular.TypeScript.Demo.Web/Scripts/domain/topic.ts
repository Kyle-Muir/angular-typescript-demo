module Model {
    export class Topic {
        public hostUrl: string;
        public title: string;
        public id: number;

        constructor(id: number, title: string, hostUrl: string) {
            if (!_.isNumber(id)) { throw new Error('id must be defined and a number'); }
            if (!_.isString(title)) { throw new Error('title must be defined and a string'); }
            if (!_.isString(hostUrl)) { throw new Error('hostUrl must be defined and a string'); }

            this.hostUrl = hostUrl;
            this.title = title;
            this.id = id;
        }
    }
} 