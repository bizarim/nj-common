import { eErrorCode } from '..';

// 시간이 없어 잘못 만듦
// todo 꼭 리펙토링 해야함
export interface IUpParams {

}


export class ParamsUpSendCoinsPending implements IUpParams {
    address: string;
    category: string;
    amount: number;
    commission: number;
    memberId: number;
}

export class ParamsSendCondition implements IUpParams {
    error: eErrorCode;
    memberId: number;
    balance: number;
    amount: number;
    commission: number;
    status: number;
    type: string;
    address: string;
}
