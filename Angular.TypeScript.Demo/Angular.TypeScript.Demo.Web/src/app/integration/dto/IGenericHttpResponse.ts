module Integration {
    'use strict';
    export interface IGenericHttpResponse<T> {
        config: any;
        data: T;
        headers: any;
        status: number;
        statusText: string;
    }
}  