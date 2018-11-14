/**
 * @author: liubowen
 * @date: 2018/7/19 上午1:15
 * @description:
 */
export class LocalStorage {

    public get(key: string): string {
        return cc.sys.localStorage.getItem(key);
    }

    public set(key: string, value: string): void {
        cc.sys.localStorage.setItem(key, value);
    }

    public remove(key: string): void {
        cc.sys.localStorage.removeItem(key);
    }

}