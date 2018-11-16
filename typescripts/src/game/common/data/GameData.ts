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
    //游戏过关时间
    private _gametime : number;
    /** 游戏过关总时间 */
    private _totalGameTime: number;
    //玩家id
    private _playerId : number;
    //玩家玩的次数
    private _playtimes:number;
    /** 判定动画消除时间 */
    private _gridEffectTime: number;

    constructor() {
        this._level = 1;
        this._score = 0;
        this._gametime = 300;
        this._totalGameTime = 300;
        this._playtimes = 0;
        this._gridEffectTime = 0.5;
    }

    public refuseData(){//重制数据
        this._level = 1;
        this._score = 0;

        this._gametime = 300;
        this._totalGameTime = 300;
        this._playtimes = 0;
    }
    //游戏开始
    public gameStart(){
        this._score = 0;
        this._gametime = 300;
        this._totalGameTime = 300;
    }
    //增加等级
    public addlevel(){
        this._level += 1;
    }
    //增加分数
    public addscore(value :number){
        this._score += value * Math.sqrt(this._playtimes || 1);
    }
    //增加游戏时间
    public addgametime(){
        var levelsInfo = ConfigManager.levelsJsonMap.get(this._level)
        var value = levelsInfo.addtime || 60
        this._gametime +=value
        this._totalGameTime += value;
    }
    // public addgametime(value:number){
    //     if(value == null)
    //     {
    //         var levelsInfo = ConfigManager.levelsJsonMap.get(this._level)
    //         value = levelsInfo.addtime
    //     }
    //     this._gametime +=value
    // }
    get playtimes(): number{
        return this._playtimes;
    }
    set playtimes(_playtimes :number) {
        this._playtimes = _playtimes;
    }
    get playerId(): number{
        return this._playerId;
    }
    set playerId(_playerId :number) {
        this._playerId = _playerId;
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
    get gametime():number{
        return this._gametime
    }
    set gametime(_gametime : number) {
        this._gametime = _gametime
    }
    get totalGameTime(): number{
        return this._totalGameTime;
    }
    set totalGameTime(_totalTime: number) {
        this._totalGameTime = _totalTime;
    }
    get gridEffectTime(): number{
        return this._gridEffectTime;
    }

}