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
    eErrorCode[eErrorCode["API"] = 500] = "API";
    /**
     * 등록 되지 않은 provider 입니다.
     */
    eErrorCode[eErrorCode["InvalidProviderCode"] = 501] = "InvalidProviderCode";
    /**
     * 제공된 provider key가 잘못 됬습니다. 메일을 확인해 주세요.
     */
    eErrorCode[eErrorCode["InvalidProviderKey"] = 502] = "InvalidProviderKey";
    eErrorCode[eErrorCode["InvalidTokenAccess"] = 503] = "InvalidTokenAccess";
    eErrorCode[eErrorCode["InvalidTokenRefresh"] = 504] = "InvalidTokenRefresh";
    eErrorCode[eErrorCode["ExpireTokenAccess"] = 505] = "ExpireTokenAccess";
    eErrorCode[eErrorCode["AlreadyExistProvider"] = 506] = "AlreadyExistProvider";
    eErrorCode[eErrorCode["InvalidRequest"] = 507] = "InvalidRequest";
    eErrorCode[eErrorCode["InvalidMemberId"] = 508] = "InvalidMemberId";
    eErrorCode[eErrorCode["DoNotReqeustWallet"] = 510] = "DoNotReqeustWallet";
    eErrorCode[eErrorCode["AlreadyRequestWallet"] = 511] = "AlreadyRequestWallet";
    eErrorCode[eErrorCode["AlreadyExistWallet"] = 512] = "AlreadyExistWallet";
    eErrorCode[eErrorCode["CannotUseCoinWallet"] = 513] = "CannotUseCoinWallet";
    eErrorCode[eErrorCode["NotEnoughBalance"] = 514] = "NotEnoughBalance";
    eErrorCode[eErrorCode["NotEnoughMotherLedger"] = 515] = "NotEnoughMotherLedger";
    eErrorCode[eErrorCode["UnmanagedAddress"] = 516] = "UnmanagedAddress";
    eErrorCode[eErrorCode["UnmanagedProvider"] = 517] = "UnmanagedProvider";
    eErrorCode[eErrorCode["NoneExistProviderAccount"] = 600] = "NoneExistProviderAccount";
    eErrorCode[eErrorCode["NoneExistProviderWallet"] = 601] = "NoneExistProviderWallet";
    eErrorCode[eErrorCode["NoneExistMember"] = 602] = "NoneExistMember";
    eErrorCode[eErrorCode["NoneExistCoinWallet"] = 603] = "NoneExistCoinWallet";
    eErrorCode[eErrorCode["NoneExistCoinBalance"] = 604] = "NoneExistCoinBalance";
    eErrorCode[eErrorCode["NoneExistTransaction"] = 605] = "NoneExistTransaction";
    eErrorCode[eErrorCode["NoneExistBlock"] = 606] = "NoneExistBlock";
    /**
     * RPC 통신 오류
     * todo 세분화
     */
    eErrorCode[eErrorCode["RPC"] = 800] = "RPC";
    eErrorCode[eErrorCode["DB"] = 900] = "DB";
    eErrorCode[eErrorCode["DB_ERROR"] = 901] = "DB_ERROR";
    eErrorCode[eErrorCode["DB_ERROR_ISR_AffectedRows"] = 902] = "DB_ERROR_ISR_AffectedRows";
    eErrorCode[eErrorCode["DB_ERROR_UP_AffectedRows"] = 903] = "DB_ERROR_UP_AffectedRows";
    eErrorCode[eErrorCode["DB_ERROR_UP_ChangedRows"] = 904] = "DB_ERROR_UP_ChangedRows";
    eErrorCode[eErrorCode["DB_ERROR_CONN"] = 905] = "DB_ERROR_CONN";
    eErrorCode[eErrorCode["REDIS"] = 950] = "REDIS";
    eErrorCode[eErrorCode["REDIS_ERROR"] = 951] = "REDIS_ERROR";
    eErrorCode[eErrorCode["REDIS_EXCEPTION"] = 952] = "REDIS_EXCEPTION";
    eErrorCode[eErrorCode["REDIS_CONN_ERROR"] = 953] = "REDIS_CONN_ERROR";
    eErrorCode[eErrorCode["REDIS_HKEY_NONE_VALUES"] = 954] = "REDIS_HKEY_NONE_VALUES";
    eErrorCode[eErrorCode["REDIS_KEY_NONE_VALUE"] = 955] = "REDIS_KEY_NONE_VALUE";
})(eErrorCode = exports.eErrorCode || (exports.eErrorCode = {}));
//# sourceMappingURL=error.js.map