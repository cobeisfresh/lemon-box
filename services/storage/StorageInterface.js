// @flow
export interface StorageInterface {
    get(key: string): ?any,
    set(key: string, data: any): void,
    remove(key: string): void,
    clear(): void,
    removeMultiple(keys: string[]): void
}