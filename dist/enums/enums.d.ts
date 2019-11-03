/**
 * database 구분을 위한 정의
 */
export declare enum eDb {
    wallet = "wallet",
    test = "test"
}
export declare enum eReqWallet {
    request = 0,
    confirm = 1,
    cancel = 2
}
export declare enum eBalanceStatus {
    using = 0,
    sendRequest = 1,
    sendPending = 2,
    blocked = 3
}
export declare enum eFluctuate {
    decrease = -1,
    all = 0,
    increase = 1
}
export declare enum eCoin {
    btc = "btc",
    eth = "eth"
}
export declare enum eHDWallet {
    mother = "mother",
    child = "child"
}
export declare enum eTransType {
    internalTrading = 0,
    externalRecv = 1,
    externalSend = 2
}
export declare enum eTransState {
    none = 0,
    request = 1,
    pendingApproval = 2,
    confirmed = 3,
    unConfirmed = 4,
    rejected = 5
}
