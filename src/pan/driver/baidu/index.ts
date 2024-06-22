import { Driver } from "../../typeings";




export default class BaiduDriver implements Driver {
    genShareLink(path: string): string {
        throw new Error("Method not implemented.");
    }
    saveTransfer(from: string): string {
        throw new Error("Method not implemented.");
    }

}