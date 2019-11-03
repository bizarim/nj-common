"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 에러코드 정의
 */
var eErrorCode;
(function (eErrorCode) {
    eErrorCode[eErrorCode["Success"] = 0] = "Success";
    eErrorCode[eErrorCode["Undefined"] = 1] = "Undefined";
    eErrorCode[eErrorCode["AskAdmin"] = 100] = "AskAdmin";
    eErrorCode[eErrorCode["BadRequest"] = 400] = "BadRequest";
    eErrorCode[eErrorCode["NotFound"] = 404] = "NotFound";
    /**
     * API 오류
     */
    eErrorCode[eErrorCode["API"] = 500] = "API";
    /**
     * RPC 통신 오류
     */
    eErrorCode[eErrorCode["RPC"] = 800] = "RPC";
    /**
     * DB 오류
     */
    eErrorCode[eErrorCode["DB"] = 900] = "DB";
    eErrorCode[eErrorCode["DB_ERROR"] = 901] = "DB_ERROR";
    eErrorCode[eErrorCode["DB_ERROR_ISR_AffectedRows"] = 902] = "DB_ERROR_ISR_AffectedRows";
    eErrorCode[eErrorCode["DB_ERROR_UP_AffectedRows"] = 903] = "DB_ERROR_UP_AffectedRows";
    eErrorCode[eErrorCode["DB_ERROR_UP_ChangedRows"] = 904] = "DB_ERROR_UP_ChangedRows";
    eErrorCode[eErrorCode["DB_ERROR_CONN"] = 905] = "DB_ERROR_CONN";
    /**
     * REDIS 오류
     */
    eErrorCode[eErrorCode["REDIS"] = 950] = "REDIS";
    eErrorCode[eErrorCode["REDIS_ERROR"] = 951] = "REDIS_ERROR";
    eErrorCode[eErrorCode["REDIS_EXCEPTION"] = 952] = "REDIS_EXCEPTION";
    eErrorCode[eErrorCode["REDIS_CONN_ERROR"] = 953] = "REDIS_CONN_ERROR";
    eErrorCode[eErrorCode["REDIS_HKEY_NONE_VALUES"] = 954] = "REDIS_HKEY_NONE_VALUES";
    eErrorCode[eErrorCode["REDIS_KEY_NONE_VALUE"] = 955] = "REDIS_KEY_NONE_VALUE";
})(eErrorCode = exports.eErrorCode || (exports.eErrorCode = {}));
//# sourceMappingURL=error.js.map