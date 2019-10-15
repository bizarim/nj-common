import * as os from 'os';

export class ConfigLoader {
    protected env: string = 'dev';
    protected numCPUs: number = 1;
    constructor() {
        if (undefined !== process.env.NODE_ENV) {
            if ('' !== process.env.NODE_ENV) {
                this.env = process.env.NODE_ENV;
            }
        }

        this.numCPUs = os.cpus().length;
    }

    getEnv(): string {
        return this.env;
    }

    getCPUs(): number {
        return this.numCPUs;
    }

    isDev(): boolean {
        return this.env === 'dev';
    }

    toJson(path: string): any {
        const fs = require('fs');
        if (!fs.existsSync(path)) {
            throw Error('none exist config file: ' + path);
        }
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    }
}