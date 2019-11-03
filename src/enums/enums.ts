/**
 * database 구분을 위한 정의
 */
export enum eDb {
    wallet = 'wallet',
    test = 'test'
}

export enum eReqWallet {
    request = 0,    // 요청
    confirm = 1,    // 생성 완료
    cancel = 2,     // 취소
}

export enum eBalanceStatus {
    using = 0,
    sendRequest = 1,
    sendPending = 2,
    blocked = 3
}

export enum eFluctuate {
    decrease = -1,
    all = 0,
    increase = 1,
}

export enum eCoin {
    btc = 'btc',
    eth = 'eth'
}

export enum eHDWallet {
    mother = 'mother',
    child = 'child'
}

// 거래 타입
export enum eTransType {
    internalTrading = 0,    // 내부 거래
    externalRecv = 1,       // 외부 입금
    externalSend = 2,       // 외부 출금
}

// 거래 상태
export enum eTransState {
    none = 0,
    request = 1,
    pendingApproval = 2,
    confirmed = 3,
    unConfirmed = 4,
    rejected = 5
}