import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {ResourcesManager} from "./ResourcesManager";
import {Vec2} from "./Vec2";

@ccclass()
export class GameGrid extends cc.Component {

    /** 格子背景 */
    @property(cc.Sprite)
    private gridBg: cc.Sprite = null;
    /** 格子字 */
    @property(cc.Label)
    private gridText: cc.Label = null;
    /** 坐标 */
    private coordinate: Vec2 = null;

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
    public init(vec2: Vec2): void {
        
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