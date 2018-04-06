// @flow
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Schema = {
    method: RequestMethod,
    url: string,
    data?: any,
    headers?: Object,
    params?: Object,
    formData?: any
}