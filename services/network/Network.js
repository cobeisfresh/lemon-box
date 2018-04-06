// @flow
import axios from 'axios'
import type {Schema} from 'services/network/Schema'

export interface NetworkServiceInterface {
    makeRequest(requestSchema: Schema): Promise<any>,
    setRequestInterceptor(interceptor: Function): void,
    setResponseInterceptor(interceptor: Function): void,
    ejectRequestInterceptor(): void,
    ejectResponseInterceptor(): void
}

class Network implements NetworkServiceInterface {
    axiosInstance: Object
    requestInterceptor: Function
    responseInterceptor: Function

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({baseURL})
    }

    setRequestInterceptor(interceptor: Function, errorInterceptor?: Function) {
        this.requestInterceptor = this.axiosInstance.interceptors.request.use(interceptor, errorInterceptor)
    }

    setResponseInterceptor(interceptor: Function, errorInterceptor?: Function) {
        this.responseInterceptor = this.axiosInstance.interceptors.response.use(interceptor, errorInterceptor)
    }

    ejectRequestInterceptor() {
        this.axiosInstance.request.eject(this.requestInterceptor)
    }

    ejectResponseInterceptor() {
        this.axiosInstance.request.eject(this.responseInterceptor)
    }

    makeRequest(requestSchema: Schema): Promise<any> {
        return this.axiosInstance.request(requestSchema)
    }
}

export default Network