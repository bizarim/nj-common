import { eErrorCode } from '../enums';
import { IUpResult } from './IUpResult';
/**
 * Response context 인터페이스
 */
export interface IResponseContext {
    initialize(rt: IUpResult): IResponseContext;
}
/**
 * Response 구현 객체
 */
export declare class Response<T extends IResponseContext> {
    error: string;
    msg: string;
    context: T | undefined;
    constructor(rt: IUpResult | eErrorCode, type: {
        new (): T;
    });
}
