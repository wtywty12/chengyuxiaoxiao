/**
 * @author: liubowen
 * @date: 2018/9/26 下午3:27
 * @description: 接口返回数据申明类型
 */
declare interface IResponseDataVo {
    readonly code: number;
    readonly data: IServerDataVo;
    readonly message: string;
    readonly success: boolean;
}


