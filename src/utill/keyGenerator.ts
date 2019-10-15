import * as short from 'short-uuid';

export function generateKey(): string {
    return short.generate();
}