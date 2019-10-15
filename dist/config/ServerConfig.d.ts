import { IServiceConfig } from './IServiceConfig';
export declare class ServerConfig implements IServiceConfig {
    env: string;
    name: string;
    port: number;
    logPath: string;
    logLevel: string;
}
