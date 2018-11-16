/**
 * @author: liubowen
 * @date: 2018/9/26 下午3:26
 * @description: json 配置文件申明类型
 */
interface IData {
    readonly id: number;
}

declare interface idiomJson {
    readonly idiomAry: Array<Idiom>;
}

declare interface Idiom extends IData {
    readonly ID: number;
    readonly chengyu: string;
}

declare interface levelsJson {
    readonly levelsAry: Array<levels>;
}

declare interface levels extends IData {
    readonly level:number;
    readonly line:number;
    readonly row:number;
    readonly addtime:number;
}
