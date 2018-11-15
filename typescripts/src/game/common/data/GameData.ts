/**
 * @author: liubowen
 * @date: 2018/11/5 下午1:59
 * @description:
 */
import {ConfigManager} from "../ConfigManager";

export class GameData {
    //最高分
    private _topscore : number;
    //当前分数
    private _score : number;
    //当前全清了多少次 等级
    private _level : number;
    //游戏过关市场
    private _gametime : number;



    constructor() {
        this._level = 1;
        this._score = 0;
        this._topscore = 0;
        this._gametime = 0;
    }

    public refuseData(){//重制数据
        this._level = 1;
        this._score = 0;
        this._topscore = 0;
        this._gametime = 0;
    }
    get level(): number{
        return this._level;
    }
    set level(_level :number) {
        this._level = _level;
    }
    get topscore():number{
        return this._topscore
    }
    set topscore(_topscore : number) {
        this._topscore = _topscore
    }
    get score():number{
        return this._score
    }
    set score(_score : number) {
        this._score = _score
    }
    public addscore(value :number){
        this._score += value;
    }
    get gametime():number{
        return this._gametime
    }
    set gametime(_gametime : number) {
        this._gametime = _gametime
    }
 

}