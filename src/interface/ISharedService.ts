import { ILogger } from './ILogger';

export interface ISharedService {
    initialize(path: string, logger?: ILogger): Promise<void>;
}