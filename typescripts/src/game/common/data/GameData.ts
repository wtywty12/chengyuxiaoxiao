/**
 * @author: liubowen
 * @date: 2018/11/5 下午1:59
 * @description:
 */
import {ConfigManager} from "../ConfigManager";
import {StorageInfo} from "./StorageInfo";

export class GameData {
    //最高分 改为存本地缓存
    // private _topscore : number;
    //当前分数
    private _score : number;
    /** 临时分数 用于红包显示分数 */
    private _tempScore: number;
    //当前全清了多少次 等级
    private _level : number;
    /** 临时记录关卡 红包返回继续 */
    private _tempLevel: number;
    //游戏过关时间
    private _gametime : number;
    /** 游戏过关总时间 */
    private _totalGameTime: number;
    //玩家id
    private _playerId : number;
    //玩家玩的次数
    // private _playtimes:number;
    /** 判定动画消除时间 */
    private _gridEffectTime: number;
    /** 格子宽 */
    private _gridWidth: number;
    /** 格子高 */
    private _gridHeight: number;
    /** 每日红包次数 */
    private _redPackTimes: number;
    /** 游戏过关剩余时间 */
    private _lastTime: number;
    /** 答对成语数 */
    private _rightTimes: number;

    constructor() {
        this._level = 1;
        this._tempLevel = 1;
        this._score = 0;
        this._tempScore = 0;
        this._totalGameTime = 30;
        this._gametime = this._totalGameTime;
        // this._playtimes = 0;
        this._gridEffectTime = 0.5;
        this._gridWidth = 109;
        this._gridHeight = 109;
        this._redPackTimes = 3;
        this._lastTime = 0;
        this.rightTimes = 0;
    }

    public refuseData(){//重制数据
        this._tempLevel = this._level;
        this._level = 1;
        this._tempScore = this._score;
        this._score = 0;
        this._lastTime = 0;
        this._gametime = this._totalGameTime;
        this.rightTimes = 0;
        // this._totalGameTime = 60;
        // this._playtimes = 0;//个人中心记录次数 此处不能清零
    }
    //游戏开始
    public gameStart(){
        this._score = 0;
        this._gametime = this._totalGameTime;
    }
    //增加等级
    public addlevel(){
        this._level += 1;
    }
    //增加分数
    public setScore(){
        var playTimes = StorageInfo.getPlayTimes();
        this.score = Math.floor(this.rightTimes * 4 * Math.sqrt(playTimes));
        StorageInfo.setTopScore(this._score);
    }
    //增加游戏时间
    public addgametime(){
        var levelsInfo = ConfigManager.levelsJsonMap.get(this._level)
        var value = levelsInfo.addtime || 0;
        this._gametime += value
    }
    // public addgametime(value:number){
    //     if(value == null)
    //     {
    //         var levelsInfo = ConfigManager.levelsJsonMap.get(this._level)
    //         value = levelsInfo.addtime
    //     }
    //     this._gametime +=value
    // }
    // get playtimes(): number{
    //     return this._playtimes;
    // }
    // set playtimes(_playtimes :number) {
    //     this._playtimes = _playtimes;
    // }
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
    get templevel(): number{
        return this._tempLevel;
    }
    set templevel(_level :number) {
        this._tempLevel = _level;
    }
    // get topscore():number{
    //     return this._topscore
    // }
    // set topscore(_topscore : number) {
    //     this._topscore = _topscore
    // }
    get score():number{
        return this._score
    }
    set score(_score : number) {
        this._score = _score
        StorageInfo.setTopScore(_score);
    }
    get tempScore(): number{
        return this._tempScore;
    }
    set tempScore(_score: number) {
        this._tempScore = _score;
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
    get gridGridWidth(): number{
        return this._gridWidth;
    }
    get gridGridHeight(): number{
        return this._gridHeight;
    }
    set redPackTimes(times: number) {
        this._redPackTimes = times;
    }
    get redPackTimes() {
        return this._redPackTimes;
    }
    set lastTime(times: number) {
        this._lastTime = times;
    }
    get lastTime() {
        return this._lastTime;
    }
    set rightTimes(times: number) {
        this._rightTimes = times;
    }
    get rightTimes() {
        return this._rightTimes;
    }
}