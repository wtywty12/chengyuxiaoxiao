import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameTable} from "./../game/GameTable";
import {ChooseView} from "./../game/ChooseView";
// import {ConfigManager} from "./../common/ConfigManager";
// import {ResourcesManager} from "./../common/data/ResourcesManager";

@ccclass()
export class GameScene extends cc.Component {

    /** 标题 */
    @property(cc.Label)
    private title: cc.Label = null;

    // /** 中心表 */
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
    protected onLoad() {

         this.loadFinish();
    }

    /** 类销毁 */
    protected onDestroy(): void {

    }

    private loadFinish(): void {
        this.chooseView.loadFinish();
        this.gameTable.setChooseView(this.chooseView);
        this.gameTable.loadFinish();
    }

    public displayResult(isSuccess: boolean) {
        
    }

    
}