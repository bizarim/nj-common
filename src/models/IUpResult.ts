import { IDto } from '..';
import { eErrorCode } from '../enums';

export interface IUpResult {
    errcode: eErrorCode;
    context: Object | undefined;
}

export class UrtResult implements IUpResult {
    errcode: eErrorCode;
    context: Object | undefined;
    constructor(err: eErrorCode) { this.errcode = err; }
}

export class UrtError implements IUpResult {
    errcode: eErrorCode;
    context: Object | undefined;
    constructor(err: eErrorCode) { this.errcode = err; }
}

export class UrtTest implements IUpResult {
    errcode: eErrorCode;
    context: IDto[] | undefined;

    constructor(err: eErrorCode) { this.errcode = err; }
}
