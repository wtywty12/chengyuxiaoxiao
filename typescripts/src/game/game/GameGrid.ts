import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {Vec2} from "./../../utils/Vec2";

@ccclass()
export class GameGrid extends cc.Component {

    /** 格子背景 */
    @property(cc.Sprite)
    private gridBg: cc.Sprite = null;
    /** 格子字 */
    @property(cc.Label)
    private gridText: cc.Label = null;
    /** 索引 */
    private index: number = null;
    /** vec 用于标记中心表索引 */
    private vec: number = null;

    /** 构造函数 */
    protected constructor() {
        super();
    }

    /** 类加载 */
    protected onLoad(): void {

    }

    /** 类销毁 */
    protected onDestroy(): void {

    }

    /** 真正调用的初始化函数 */
    public init(): void {
        
    }

    public setIndex(index: number) {
        if (typeof(index) != "number") {
            cc.log("index is null");
            return;
        }
        this.index = index;
    }

    public getIndex(): number {
        return this.index;
    }

    public setVec(vec: number) {
        if (typeof(vec) != "number") {
            cc.log("vec is null");
            return;
        }
        this.vec = vec;
    }

    public getVec(): number {
        return this.vec;
    }

    public setGridString(str: string) {
        if (typeof(str) != "string") {
            cc.log("setGridString is null");
            return;
        }
        this.gridText.string = str;
    }

    public getGridString(): string {
        return this.gridText.string;
    }
}