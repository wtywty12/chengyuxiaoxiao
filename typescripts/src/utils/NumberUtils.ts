/**
 * User: lizhen
 * Note: NumberUtils
 */
export class NumberUtils {

    public static convertNumber(num: number): string {
        let smallLength = 4;
        let retStr: string = "";
        let str: string = num.toString();
        let strLength = str.length;
        if (strLength <= smallLength) {
            return str;
        } else if (strLength > smallLength && strLength <= smallLength * 2) {
            retStr = this.sliceToStr(str, 4, "A");
        } else if (strLength > smallLength && strLength <= smallLength * 3) {
            retStr = this.sliceToStr(str, 4 * 2, "B");
        } else if (strLength > smallLength && strLength <= smallLength * 4) {
            retStr = this.sliceToStr(str, 4 * 3, "C");
        } else if (strLength > smallLength && strLength <= smallLength * 5) {
            retStr = this.sliceToStr(str, 4 * 4, "D");
        } else if (strLength > smallLength && strLength <= smallLength * 6) {
            retStr = this.sliceToStr(str, 4 * 5, "E");
        } else if (strLength > smallLength && strLength <= smallLength * 7) {
            retStr = this.sliceToStr(str, 4 * 6, "F");
        } else if (strLength > smallLength && strLength <= smallLength * 8) {
            retStr = this.sliceToStr(str, 4 * 7, "G");
        }

        return retStr;
    }

    private static sliceToStr(str: string, length: number, toStr: string): string {
        return `${str.slice(0, str.length - length)}.${str.slice(str.length - length, str.length -
            (length - 2))}${toStr}`;
    }


}