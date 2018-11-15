/**
 * @author: liubowen
 * @date: 2018/11/5 下午1:59
 * @description:
 */
import {ConfigManager} from "../ConfigManager";

export class UserData {
    private _playerId : number = 0 ;
    private _headUrl : string = "";
    private _sex : number = 1;

    constructor() {
    }
    
    get playerId():number{
        return this._playerId
    }
    set playerId(_playerId : number) {
        this._playerId = _playerId
    }
    get headUrl():string{
        return this._headUrl
    }
    set headUrl(_headUrl : string) {
        this._headUrl = _headUrl
    }  
    get sex():number{
        return this._sex
    }
    set sex(_sex : number) {
        this._sex = _sex
    }

}