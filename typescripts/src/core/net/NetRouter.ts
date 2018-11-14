import {DefaultGameEvent} from "../event/DefaultGameEvent";
import {NetEventCode} from "./NetEventCode";
import {gameCmdHandlerManager} from "./GameCmdHandlerManager";
import {GameEventTransmitter} from "../event/GameEventTransmitter";

/**
 * @author: liubowen
 * @date: 2018/6/29 上午12:41
 * @description: socket 路由器
 */
export class NetRouter {

    private socket: WebSocket;
    private readonly DEFAULT_CIPHER: Array<number> = [43, 32, 21, 10];
    private readonly STRICT: boolean;
    /** 默认消息头部 */
    public readonly HEADER_FLAG: number = 0X5362;
    /** 消息体最大长度 */
    public readonly MAX_BODY_LEN: number = 0X7FFFFFFF;

    private readonly HEARTBEAT_CMD: number = 0x521f;

    public constructor(strict: boolean) {
        this.STRICT = strict;
    }

    private init(): void {
        this.socket.binaryType = "arraybuffer";

        this.socket.onopen = (event: Event) => {
            this.onConnect(event)
        };
        this.socket.onclose = (event: CloseEvent) => {
            this.onDisconnect(event);
        };
        this.socket.onerror = (event: Event) => {
            this.onError(event);
        };
        this.socket.onmessage = (event: MessageEvent) => {
            cc.log(`socket.onmessage ${JSON.stringify(event)}`);
            // let message: IMessage = Message.decode(new Uint8Array(event.data));
            // this.onMessage(this.convert(message));
        };
        //  保持心跳链接
        setInterval(() => {
            this.send(this.HEARTBEAT_CMD, new Uint8Array(0));
        }, 5 * 1000);
    }

    private onConnect(event: Event): void {
        cc.log(`net connect event:`, event);
        GameEventTransmitter.emit(DefaultGameEvent.of(NetEventCode.connect));
    }

    private onDisconnect(event: CloseEvent): void {
        cc.log(`net disconnect event:`, event);
        GameEventTransmitter.emit(DefaultGameEvent.of(NetEventCode.disconnect));
    }

    private onError(event: Event): void {
        cc.log(`net error event:`, event);
        GameEventTransmitter.emit(DefaultGameEvent.of(NetEventCode.error));
    }

    private onMessage(message: any): void {
        cc.log(`net on message, message: `, message);
        gameCmdHandlerManager.onMessage(message.protocol, message);
    }

    public connect(url: string): void {
        this.socket = new WebSocket(url);
        this.init();
    }

    public isConnect(): boolean {
        return typeof(this.socket.readyState) != "undefined" &&
            this.socket.readyState == WebSocket.OPEN;
    }

    public send(protocol: number, bodyMessage: Uint8Array = null): void {
        if (!this.isConnect()) {
            cc.log("net not Connect");
            return;
        }

        // let message: IMessage = Message.create();
        // message.protocol = protocol;
        // message.bodyLen = 0;
        // if (bodyMessage != null) {
        //     message.body = bodyMessage;
        //
        //     if (message.body.byteLength > this.MAX_BODY_LEN) {
        //         throw new Error(`message body is too long ... protocol : ${message.protocol}`);
        //     }
        //     message.bodyLen = message.body.byteLength;
        // }
        //
        // message.header = this.HEADER_FLAG;
        // message.version = 101;
        // message = this.convert(message);
        //
        // message.messageId = GameDataManager.instance.user.playerId;
        //
        // let msg: Uint8Array = Message.encode(message).finish();
        // this.socket.send(msg);
    }

    // private convert(message: IMessage): IMessage {
    //     if (!this.STRICT) {
    //         return message;
    //     }
    //     let cipher: Array<number> = this.getCipher(message);
    //     message = this.headerConvert(message, cipher);
    //     message = this.protocolConvert(message, cipher);
    //     return message;
    // }
    //
    // private headerConvert(message: IMessage, cipher: Array<number>): IMessage {
    //     let header: number = this.strict(message.header, cipher[0], cipher[1]);
    //     message.header = header;
    //     return message;
    // }
    //
    // private protocolConvert(message: IMessage, cipher: Array<number>): IMessage {
    //     let protocol: number = this.strict(message.protocol, cipher[2], cipher[3]);
    //     message.protocol = protocol;
    //     return message;
    // }
    //
    //
    // private strict(src: number, cipher1: number, cipher2: number): number {
    //     return (src ^ (((cipher1 & 0xFF) << 8) | (cipher2 & 0xFF)) & 0xFFFF);
    // }
    //
    // private getCipher(message: IMessage): Array<number> {
    //     let bodyLen: number = message.bodyLen;
    //     if (bodyLen > 4) {
    //         let cipher: Array<number> = [0, 0, 0, 0];
    //         let body: Uint8Array = message.body;
    //         cipher[0] = body[bodyLen - 1];
    //         cipher[1] = body[bodyLen - 2];
    //         cipher[2] = body[bodyLen - 3];
    //         cipher[3] = body[bodyLen - 4];
    //         return cipher;
    //     } else {
    //         return this.DEFAULT_CIPHER;
    //     }
    // }

}