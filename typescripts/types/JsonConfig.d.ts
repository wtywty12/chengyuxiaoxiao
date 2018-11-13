/**
 * @author: liubowen
 * @date: 2018/9/26 下午3:26
 * @description: json 配置文件申明类型
 */
interface IData {
    readonly id: number;
}

declare interface OutJson {
    readonly spd: Array<ICheckPointData>;
    readonly base: Array<IBaseData>;
}

declare interface ICheckPointData extends IData {
    readonly id: number;
    readonly show: number;
    readonly nextSpdId: number;
    readonly cellQua: number;
    readonly cellInterval: number;
    readonly sumCell: number;
}

declare interface IBaseData extends IData {
    readonly key: string;
    readonly value: string;
}

