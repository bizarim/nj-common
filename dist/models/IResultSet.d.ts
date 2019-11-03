/**
 * 프로시저에서 반환되는 data resultset
 */
export interface IResultSet {
}
export declare class RtsNow implements IResultSet {
    now: string;
}
export declare class RtsTest implements IResultSet {
    c1: number;
    c2: number;
    c3: number;
}
