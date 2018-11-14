import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameTable} from "./GameTable";
import {ChooseView} from "./ChooseView";
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

    /** 上方选择表 */
     @property(ChooseView)
     private chooseView: ChooseView = null;

    /** 构造函数 */
    protected constructor() {
        super();
        this.chooseView = new ChooseView();
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

    private loadFinish(): void {
        this.chooseView.loadFinish();
        this.gameTable.setChooseView(this.chooseView);
        this.gameTable.loadFinish();
    }

    /** 异步加载上方view完成 */
    // private loadChooseViewFinish(): void {
    //     this.chooseView = new ChooseView();
    //     this.gameTable.loadFinish();
    // }

    /** 异步加载中心view完成 */
    // private loadGameTableFinish(): void {
    //     this.gameTable = new GameTable(this.chooseView);
    //     this.gameTable.loadFinish();
    // }

    
}