import { Driver } from "../../typeings";
import Network from "./network";

export default class BaiduDriver implements Driver {
  private network: Network;

  private rootDir = "/pantuitool";

  public constructor(config: string) {
    this.network = new Network(config);
  }

  async init(): Promise<void> {
    await this.network.getBdstoken();
    const res = await this.network.getDirList(this.rootDir);
    if (res === -9) {
      this.network.createDir(this.rootDir);
    }
  }

  createShareLink(path: string): string {
    throw new Error("Method not implemented.");
  }

  transferSave(from: string, code: string = ""): string {
    await this.init();
  }
}
