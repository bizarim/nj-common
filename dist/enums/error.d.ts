/**
 * 에러코드 정의
 */
export declare enum eErrorCode {
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
    DB_ERROR = 901,
    DB_ERROR_ISR_AffectedRows = 902,
    DB_ERROR_UP_AffectedRows = 903,
    DB_ERROR_UP_ChangedRows = 904,
    DB_ERROR_CONN = 905,
    /**
     * REDIS 오류
     */
    REDIS = 950,
    REDIS_ERROR = 951,
    REDIS_EXCEPTION = 952,
    REDIS_CONN_ERROR = 953,
    REDIS_HKEY_NONE_VALUES = 954,
    REDIS_KEY_NONE_VALUE = 955
}
