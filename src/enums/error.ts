/**
 * 에러코드 정의
 */
export enum eErrorCode {
    Success = 0,
    Undefined = 1,
    AskAdmin = 100,
    BadRequest = 400,
    NotFound = 404,
    /**
     * API 오류
     */
    API = 500,

    /**
     * RPC 통신 오류
     */
    RPC = 800,

    /**
     * DB 오류
     */
    DB = 900,
    DB_ERROR,
    DB_ERROR_ISR_AffectedRows,
    DB_ERROR_UP_AffectedRows,
    DB_ERROR_UP_ChangedRows,
    DB_ERROR_CONN,

    /**
     * REDIS 오류
     */
    REDIS = 950,
    REDIS_ERROR,
    REDIS_EXCEPTION,
    REDIS_CONN_ERROR,
    REDIS_HKEY_NONE_VALUES,
    REDIS_KEY_NONE_VALUE,
}
