import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameTable} from "./GameTable";
import {ConfigManager} from "./ConfigManager";
import {ResourcesManager} from "./ResourcesManager";

@ccclass()
export class GameScene extends cc.Component {

    /** 标题 */
    @property(cc.Label)
    private title: cc.Label = null;

    /** 中心表 */
    @property(GameTable)
    private gameTable: GameTable = null;

    /** 构造函数 */
    protected constructor() {
        super();
        this.gameTable = new GameTable();
    }

    /** 类加载 */
    protected async onLoad() {
        await ConfigManager.load();
        await ResourcesManager.load();
        await this.loadFinish();
    }

    /** 类销毁 */
    protected onDestroy(): void {

    }

    /** 异步加载完成 */
    private loadFinish(): void {
        this.gameTable.loadFinish();
    }
}