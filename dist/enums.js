"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eDbEnum;
(function (eDbEnum) {
    eDbEnum["wallet"] = "wallet";
    eDbEnum["test"] = "test";
})(eDbEnum = exports.eDbEnum || (exports.eDbEnum = {}));
/**
 * 에러 코드 정의
 */
var eErrCode;
(function (eErrCode) {
    eErrCode[eErrCode["Success"] = 0] = "Success";
    eErrCode[eErrCode["API"] = 100] = "API";
    eErrCode[eErrCode["InvalidQueryParmas"] = 101] = "InvalidQueryParmas";
    eErrCode[eErrCode["InvalidBodyParmas"] = 102] = "InvalidBodyParmas";
    eErrCode[eErrCode["InvalidToken"] = 103] = "InvalidToken";
    eErrCode[eErrCode["InvalidWalletId"] = 104] = "InvalidWalletId";
    eErrCode[eErrCode["NoneExistWallet"] = 105] = "NoneExistWallet";
    eErrCode[eErrCode["NoneExistTransaction"] = 106] = "NoneExistTransaction";
    eErrCode[eErrCode["NoneExistBlock"] = 107] = "NoneExistBlock";
    eErrCode[eErrCode["Exception"] = 300] = "Exception";
    eErrCode[eErrCode["RPC"] = 800] = "RPC";
    eErrCode[eErrCode["DB"] = 900] = "DB";
    eErrCode[eErrCode["DB_ERROR"] = 901] = "DB_ERROR";
    eErrCode[eErrCode["DB_ERROR_ISR"] = 902] = "DB_ERROR_ISR";
    eErrCode[eErrCode["DB_ERROR_UP1"] = 903] = "DB_ERROR_UP1";
    eErrCode[eErrCode["DB_ERROR_UP2"] = 904] = "DB_ERROR_UP2";
    eErrCode[eErrCode["DB_ERROR_CONN"] = 905] = "DB_ERROR_CONN";
})(eErrCode = exports.eErrCode || (exports.eErrCode = {}));
