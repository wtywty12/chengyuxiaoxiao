/**
 * User: lizhen
 * Note: Base
 */
export class Base {

    public readonly INIT_EMPTY: string;
    public readonly WRONG_PUNISH: string;

    constructor(baseDataMap: Map<string, string>) {
        this.INIT_EMPTY = baseDataMap.get("INIT_EMPTY");
        this.WRONG_PUNISH = baseDataMap.get("WRONG_PUNISH");
    }
}