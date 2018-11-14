export class SplitUtils {

    public static readonly MAJOR_DELIMITER: string = ",";// 默认的分隔符

    public static readonly MINOR_DELIMITER: string = "|";

    public static readonly SEMICOLON_DELIMITER: string = ";";

    public static splitNumberStr(src: string): Array<number> {
        let strings: string[] = src.split(this.MAJOR_DELIMITER);
        let array = new Array<number>();
        for (let i = 0; i < strings.length; i++) {
            array.push(Number(strings[i]));
        }
        return array;
    }

    public static compactNumberStr(src: Array<number>): string {
        let str = "";
        for (let i = 0; i < src.length; i++) {
            str += String(src[i]);
            if (i != src.length - 1) {
                str += this.MAJOR_DELIMITER;
            }
        }
        return str;
    }

    public static splitNumberMap(src: string): Map<number, number> {
        let map: Map<number, number> = new Map<number, number>();
        let strings: string[] = src.split(this.SEMICOLON_DELIMITER);
        for (let i = 0; i < strings.length; i++) {
            let itemStr: string[] = strings[i].split(this.MAJOR_DELIMITER);
            map.set(Number(itemStr[0]), Number(itemStr[1]));
        }
        return map;
    }

}