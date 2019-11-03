import { IServiceConfig } from './IServiceConfig';

export class RpcCoinfig implements IServiceConfig {
    env: string;
    user: string;
    pwd: string;
    endpoint: string;
}