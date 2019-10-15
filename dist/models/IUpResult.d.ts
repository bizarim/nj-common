import { IDto } from '..';
import { eErrorCode } from '../enums';
export interface IUpResult {
    errcode: eErrorCode;
    context: Object | undefined;
}
export declare class UrtResult implements IUpResult {
    errcode: eErrorCode;
    context: Object | undefined;
    constructor(err: eErrorCode);
}
export declare class UrtError implements IUpResult {
    errcode: eErrorCode;
    context: Object | undefined;
    constructor(err: eErrorCode);
}
export declare class UrtTest implements IUpResult {
    errcode: eErrorCode;
    context: IDto[] | undefined;
    constructor(err: eErrorCode);
}
