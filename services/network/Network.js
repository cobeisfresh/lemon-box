// @flow
import axios from 'axios'
import type {NetworkSchema} from './NetworkSchema'

export interface NetworkInterface {
    makeRequest(requestSchema: NetworkSchema): Promise<any>,
    setRequestInterceptor(interceptor: Function, errorInterceptor?: Function): void,
    setResponseInterceptor(interceptor: Function, errorInterceptor?: Function): void,
    ejectRequestInterceptor(): void,
    ejectResponseInterceptor(): void
}

class Network implements NetworkInterface {
    httpClient: Object
    requestInterceptor: Function
    responseInterceptor: Function

    static methods = {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE'
    }

    constructor(baseURL: string, options: Object = {}) {
        this.httpClient = axios.create({baseURL, ...options})
    }

    setRequestInterceptor(interceptor: Function, errorInterceptor?: Function) {
        this.requestInterceptor = this.httpClient.interceptors.request.use(interceptor, errorInterceptor)
    }

    setResponseInterceptor(interceptor: Function, errorInterceptor?: Function) {
        this.responseInterceptor = this.httpClient.interceptors.response.use(interceptor, errorInterceptor)
    }

    ejectRequestInterceptor() {
        this.httpClient.request.eject(this.requestInterceptor)
    }

    ejectResponseInterceptor() {
        this.httpClient.request.eject(this.responseInterceptor)
    }

    makeRequest(requestSchema: NetworkSchema): Promise<any> {
        return this.httpClient.request(requestSchema)
    }
}

export default Network