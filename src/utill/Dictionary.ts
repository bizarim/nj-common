export interface IKeyedCollection<T> {
    add(key: string, value: T): void;
    containsKey(key: string): boolean;
    count(): number;
    get(key: string): T;
    keys(): string[];
    remove(key: string): T;
    values(): T[];
}

export class Dictionary<T> implements IKeyedCollection<T> {
    private items: { [index: string]: T } = {};

    private cnt: number = 0;

    public containsKey(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }

    public count(): number {
        return this.cnt;
    }

    public add(key: string, value: T): void {
        if (!this.items.hasOwnProperty(key))
            this.cnt++;

        this.items[key] = value;
    }

    public remove(key: string): T {
        const val = this.items[key];
        delete this.items[key];
        this.cnt--;
        return val;
    }

    public get(key: string): T {
        return this.items[key];
    }

    public keys(): string[] {
        const keySet: string[] = [];

        for (const prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }

        return keySet;
    }

    public values(): T[] {
        const values: T[] = [];

        for (const prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }

        return values;
    }
}