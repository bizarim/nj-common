export enum eDbEnum {
    wallet = 'wallet',
    test = 'test'
}

/**
 * 에러 코드 정의
 */
export enum eErrCode {
    Success = 0,

    API = 100,
    InvalidQueryParmas,
    InvalidBodyParmas,
    InvalidToken,
    InvalidWalletId,
    NoneExistWallet,
    NoneExistTransaction,
    NoneExistBlock,

    Exception = 300,

    RPC = 800,

    DB = 900,
    DB_ERROR,
    DB_ERROR_ISR,
    DB_ERROR_UP1,
    DB_ERROR_UP2,
    DB_ERROR_CONN

}
