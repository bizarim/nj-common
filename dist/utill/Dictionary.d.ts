export interface IKeyedCollection<T> {
    add(key: string, value: T): void;
    containsKey(key: string): boolean;
    count(): number;
    get(key: string): T;
    keys(): string[];
    remove(key: string): T;
    values(): T[];
}
export declare class Dictionary<T> implements IKeyedCollection<T> {
    private items;
    private cnt;
    containsKey(key: string): boolean;
    count(): number;
    add(key: string, value: T): void;
    remove(key: string): T;
    get(key: string): T;
    keys(): string[];
    values(): T[];
}
