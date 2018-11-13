import ccclass = cc._decorator.property;
import property = cc._decorator.property;
import {GameTable} from "./GameTable";

@ccclass()
export class GameScene extends cc.Component {

    @property(cc.Label)
    private lbl_title: cc.Label = null;

    @property(GameTable)
    private gameTable: GameTable = null;

    protected constructor() {
        super();
    }

    protected onLoad(): void {

    }

    protected onDestroy(): void {

    }
}