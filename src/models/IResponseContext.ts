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
export class Response<T extends IResponseContext> {
    error: string;
    msg: string;
    context: T | undefined;

    constructor(rt: IUpResult | eErrorCode, type: { new(): T; }) {
        if (typeof rt === 'object') {
            this.error = `${rt.errcode}`;
            this.msg = eErrorCode[rt.errcode];
            if (rt.errcode === eErrorCode.Success) {
                this.context = new type().initialize(rt) as T;
            }
        } else if (typeof rt === 'number') {
            this.error = `${rt}`;
            this.msg = eErrorCode[rt];
        } else {
            this.error = `${eErrorCode.Undefined}`;
            this.msg = eErrorCode[eErrorCode.Undefined];
        }
    }
}
