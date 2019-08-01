import { eErrCode } from './enums';
export interface IDto {
}
export interface IRsResult {
    error: string;
    msg: string;
    context: object | undefined;
}
export declare class RsResult implements IRsResult {
    error: string;
    msg: string;
    context: object | undefined;
}
export interface IUpResult {
    err: eErrCode;
    toResponse(): IRsResult;
}
export declare class UrtResult implements IUpResult {
    err: eErrCode;
    toResponse(): RsResult;
}
export declare class UrtError implements IUpResult {
    err: eErrCode;
    constructor(err: eErrCode);
    toResponse(): RsResult;
}
