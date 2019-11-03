"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    constructor() {
        this.items = {};
        this.cnt = 0;
    }
    containsKey(key) {
        return this.items.hasOwnProperty(key);
    }
    count() {
        return this.cnt;
    }
    add(key, value) {
        if (!this.items.hasOwnProperty(key))
            this.cnt++;
        this.items[key] = value;
    }
    remove(key) {
        const val = this.items[key];
        delete this.items[key];
        this.cnt--;
        return val;
    }
    get(key) {
        return this.items[key];
    }
    keys() {
        const keySet = [];
        for (const prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    }
    values() {
        const values = [];
        for (const prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    }
}
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map