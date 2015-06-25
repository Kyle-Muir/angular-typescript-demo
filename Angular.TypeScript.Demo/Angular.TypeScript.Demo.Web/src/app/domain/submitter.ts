module Model {
    'use strict';
    export class Submitter {
        public id: string;
        public name: string;
        public initial: string;

        constructor(id: string, name: string) {
            if (!_.isString(id)) { throw new Error('id must be defined and a string'); }
            if (!_.isString(name)) { throw new Error('name must be defined and a string'); }

            this.id = id;
            this.name = name;
            this.initial = name[0];
        }
    }
}