export declare class ConfigLoader {
    protected env: string;
    protected numCPUs: number;
    constructor();
    getEnv(): string;
    getCPUs(): number;
    isDev(): boolean;
    toJson(path: string): any;
}
