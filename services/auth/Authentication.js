// @flow
import type {StorageInterface} from 'services/storage/StorageInterface'

export interface AuthenticationInterface {
    storage: StorageInterface,
    saveAuthToken(token: string): void,
    getAuthToken(): ?string,
    removeAuthToken(): void,
    isAuthenticated(): boolean
}

class Authentication implements AuthenticationInterface {
    storage: StorageInterface
    storageAuthTokenKey: string

    constructor(storage: StorageInterface, storageAuthTokenKey) {
        this.storage = storage
        this.storageAuthTokenKey = storageAuthTokenKey
    }

    /**
     * Save user token to storage
     * @param {String} token
     */
    saveAuthToken(token: string) {
        this.storage.set(this.storageAuthTokenKey, token)
    }

    /**
     * Get user token from storage
     */
    getAuthToken(): ?string {
        return this.storage.get(this.storageAuthTokenKey)
    }

    /**
     * Remove user token from storage
     */
    removeAuthToken() {
        this.storage.remove(this.storageAuthTokenKey)
    }

    /**
     * Check if user is authenticated
     */
    isAuthenticated(): boolean {
        return !!this.getAuthToken()
    }
}

export default Authentication