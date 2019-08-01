"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
class RsResult {
}
exports.RsResult = RsResult;
class UrtResult {
    toResponse() {
        const rs = new RsResult();
        rs.error = this.err.toString();
        rs.msg = Object.keys(enums_1.eErrCode).find(x => enums_1.eErrCode[x] === this.err);
        return rs;
    }
}
exports.UrtResult = UrtResult;
class UrtError {
    constructor(err) {
        this.err = err;
    }
    toResponse() {
        const rs = new RsResult();
        rs.error = this.err.toString();
        rs.msg = Object.keys(enums_1.eErrCode).find(x => enums_1.eErrCode[x] === this.err);
        return rs;
    }
}
exports.UrtError = UrtError;
