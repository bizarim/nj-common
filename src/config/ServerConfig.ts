import { IServiceConfig } from './IServiceConfig';

export class ServerConfig implements IServiceConfig {
    env: string;
    name: string;
    port: number;
    logPath: string;
    logLevel: string = 'error';
}