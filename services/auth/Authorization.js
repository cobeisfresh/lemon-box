// @flow
import type {StorageInterface} from '../storage/Storage'

export type Action = {
    roles: string[]
}

export interface AuthorizationInterface {
    canUser(action: Action): boolean,
    persistRoles(roles: string[]): void
}

class Authorization implements AuthorizationInterface {
    storage: StorageInterface
    storageRoleKey: string

    constructor(storage: StorageInterface, storageRoleKey: string) {
        this.storage = storage
        this.storageRoleKey = storageRoleKey
    }

    /**
     * Save user roles to storage
     */
    persistRoles = (roles: string[]) => {
        this.storage.set(this.storageRoleKey, roles)
    }

    /**
     * Checks if user can do an action passed through parameter
     */
    canUser = (action: Action) => {
        const userRoles = this.storage.get(this.storageRoleKey)
        const actionRoles = action.roles
        return userRoles.some(role => actionRoles.includes(role))
    }
}

export default Authorization