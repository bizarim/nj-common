import { eErrCode } from './enums';

export interface IDto {

}

export interface IRsResult {
  error: string;
  msg: string;
  context: object | undefined;
}

export class RsResult implements IRsResult {
  error: string;
  msg: string;
  context: object | undefined;
}

export interface IUpResult {
  err: eErrCode;
  toResponse(): IRsResult;
}

export class UrtResult implements IUpResult {
  err: eErrCode;

  toResponse(): RsResult {
    const rs = new RsResult();
    rs.error = this.err.toString();
    rs.msg = Object.keys(eErrCode).find(x => eErrCode[x] === this.err) as string;

    return rs;
  }
}

export class UrtError implements IUpResult {
  err: eErrCode;

  constructor(err: eErrCode) {
    this.err = err;
  }

  toResponse(): RsResult {
    const rs = new RsResult();
    rs.error = this.err.toString();
    rs.msg = Object.keys(eErrCode).find(x => eErrCode[x] === this.err) as string;

    return rs;
  }
}
