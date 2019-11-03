import { eErrorCode } from '..';
export interface IUpParams {
}
export declare class ParamsUpSendCoinsPending implements IUpParams {
    address: string;
    category: string;
    amount: number;
    commission: number;
    memberId: number;
}
export declare class ParamsSendCondition implements IUpParams {
    error: eErrorCode;
    memberId: number;
    balance: number;
    amount: number;
    commission: number;
    status: number;
    type: string;
    address: string;
}
