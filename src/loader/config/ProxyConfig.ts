import { IServiceConfig } from './IServiceConfig';

// export class ProxyRoutes {
//     path: string[];
//     target: string;
// }

export class ProxyConfig implements IServiceConfig {
    env: string;
    path: string[];
    target: string;
}