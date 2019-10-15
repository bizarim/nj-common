
/**
 * 프로시저에서 반환되는 data resultset
 */
export interface IResultSet {

}

export class RtsNow implements IResultSet {
    public now: string;
}

export class RtsTest implements IResultSet {
    public c1: number;
    public c2: number;
    public c3: number;
}