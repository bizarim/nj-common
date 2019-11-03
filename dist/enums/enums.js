"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * database 구분을 위한 정의
 */
var eDb;
(function (eDb) {
    eDb["wallet"] = "wallet";
    eDb["test"] = "test";
})(eDb = exports.eDb || (exports.eDb = {}));
var eReqWallet;
(function (eReqWallet) {
    eReqWallet[eReqWallet["request"] = 0] = "request";
    eReqWallet[eReqWallet["confirm"] = 1] = "confirm";
    eReqWallet[eReqWallet["cancel"] = 2] = "cancel";
})(eReqWallet = exports.eReqWallet || (exports.eReqWallet = {}));
var eBalanceStatus;
(function (eBalanceStatus) {
    eBalanceStatus[eBalanceStatus["using"] = 0] = "using";
    eBalanceStatus[eBalanceStatus["sendRequest"] = 1] = "sendRequest";
    eBalanceStatus[eBalanceStatus["sendPending"] = 2] = "sendPending";
    eBalanceStatus[eBalanceStatus["blocked"] = 3] = "blocked";
})(eBalanceStatus = exports.eBalanceStatus || (exports.eBalanceStatus = {}));
var eFluctuate;
(function (eFluctuate) {
    eFluctuate[eFluctuate["decrease"] = -1] = "decrease";
    eFluctuate[eFluctuate["all"] = 0] = "all";
    eFluctuate[eFluctuate["increase"] = 1] = "increase";
})(eFluctuate = exports.eFluctuate || (exports.eFluctuate = {}));
var eCoin;
(function (eCoin) {
    eCoin["btc"] = "btc";
    eCoin["eth"] = "eth";
})(eCoin = exports.eCoin || (exports.eCoin = {}));
var eHDWallet;
(function (eHDWallet) {
    eHDWallet["mother"] = "mother";
    eHDWallet["child"] = "child";
})(eHDWallet = exports.eHDWallet || (exports.eHDWallet = {}));
// 거래 타입
var eTransType;
(function (eTransType) {
    eTransType[eTransType["internalTrading"] = 0] = "internalTrading";
    eTransType[eTransType["externalRecv"] = 1] = "externalRecv";
    eTransType[eTransType["externalSend"] = 2] = "externalSend";
})(eTransType = exports.eTransType || (exports.eTransType = {}));
// 거래 상태
var eTransState;
(function (eTransState) {
    eTransState[eTransState["none"] = 0] = "none";
    eTransState[eTransState["request"] = 1] = "request";
    eTransState[eTransState["pendingApproval"] = 2] = "pendingApproval";
    eTransState[eTransState["confirmed"] = 3] = "confirmed";
    eTransState[eTransState["unConfirmed"] = 4] = "unConfirmed";
    eTransState[eTransState["rejected"] = 5] = "rejected";
})(eTransState = exports.eTransState || (exports.eTransState = {}));
//# sourceMappingURL=enums.js.map