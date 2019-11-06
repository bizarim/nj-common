/// <reference types="node" />
declare class Int64Base {
    protected buffer: Buffer;
    constructor(num: number);
    typename(): string;
    toBuffer(): Buffer;
    toString(radix: number): string;
}
export declare class Int64 extends Int64Base {
    typename(): string;
    toBuffer(): Buffer;
    toString(radix: number): string;
}
export declare class UInt64 extends Int64Base {
    typename(): string;
    toBuffer(): Buffer;
    toString(radix: number): string;
}
export {};
