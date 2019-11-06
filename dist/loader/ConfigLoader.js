"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
class ConfigLoader {
    constructor() {
        this.env = 'dev';
        this.numCPUs = 1;
        if (undefined !== process.env.NODE_ENV) {
            if ('' !== process.env.NODE_ENV) {
                this.env = process.env.NODE_ENV;
            }
        }
        this.numCPUs = os.cpus().length;
    }
    getEnv() {
        return this.env;
    }
    getCPUs() {
        return this.numCPUs;
    }
    isDev() {
        return this.env === 'dev';
    }
    toJson(path) {
        const fs = require('fs');
        if (!fs.existsSync(path)) {
            throw Error('none exist config file: ' + path);
        }
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    }
}
exports.ConfigLoader = ConfigLoader;
//# sourceMappingURL=ConfigLoader.js.map