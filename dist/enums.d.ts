export declare enum eDbEnum {
    wallet = "wallet",
    test = "test"
}
/**
 * 에러 코드 정의
 */
export declare enum eErrCode {
    Success = 0,
    API = 100,
    InvalidQueryParmas = 101,
    InvalidBodyParmas = 102,
    InvalidToken = 103,
    InvalidWalletId = 104,
    NoneExistWallet = 105,
    NoneExistTransaction = 106,
    NoneExistBlock = 107,
    Exception = 300,
    RPC = 800,
    DB = 900,
    DB_ERROR = 901,
    DB_ERROR_ISR = 902,
    DB_ERROR_UP1 = 903,
    DB_ERROR_UP2 = 904,
    DB_ERROR_CONN = 905
}
