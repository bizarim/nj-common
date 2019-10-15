"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
/**
 * Response 구현 객체
 */
class Response {
    constructor(rt, type) {
        if (typeof rt === 'object') {
            this.error = `${rt.errcode}`;
            this.msg = enums_1.eErrorCode[rt.errcode];
            if (rt.errcode === enums_1.eErrorCode.Success) {
                this.context = new type().initialize(rt);
            }
        }
        else if (typeof rt === 'number') {
            this.error = `${rt}`;
            this.msg = enums_1.eErrorCode[rt];
        }
        else {
            this.error = `${enums_1.eErrorCode.Undefined}`;
            this.msg = enums_1.eErrorCode[enums_1.eErrorCode.Undefined];
        }
    }
}
exports.Response = Response;
//# sourceMappingURL=IResponseContext.js.map