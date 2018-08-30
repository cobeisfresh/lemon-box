// @flow
export interface StorageInterface {
    get(key: string): ?any,
    set(key: string, data: any): void,
    remove(key: string): void,
    clear(): void,
    removeMultiple(keys: string[]): void
}

class Storage implements StorageInterface {
    storage = localStorage

    constructor (storage: any) {
        this.storage = storage
    }

    get(key: string): ?any {
        try {
            const item = this.storage.getItem(key)
            if (item) {
                return JSON.parse(item)
            } else {
                return null
            }
        } catch (e) {
            return null
        }
    }

    set(key: string, data: any) {
        this.storage.setItem(key, JSON.stringify(data))
    }

    remove(key: string) {
        this.storage.removeItem(key)
    }

    clear() {
        this.storage.clear()
    }

    removeMultiple(keys: string[]) {
        keys.forEach((key) => this.storage.removeItem(key))
    }
}

export default Storage