import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {ResourcesManager} from "./game/common/data/ResourcesManager";
import {Vec2} from "./Vec2";

@ccclass()
export class GameGrid extends cc.Component {

    /** 格子背景 */
    @property(cc.Sprite)
    private gridBg: cc.Sprite = null;
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

    public init(vec2: Vec2): void {

    }
}