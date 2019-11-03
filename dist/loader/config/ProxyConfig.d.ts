import { IServiceConfig } from './IServiceConfig';
export declare class ProxyConfig implements IServiceConfig {
    env: string;
    path: string[];
    target: string;
}
