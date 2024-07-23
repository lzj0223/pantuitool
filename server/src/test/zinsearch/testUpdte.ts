
import '../../pre-start';
import zinsearch from "../../zinsearch";


interface DocFile {
    tiltle: string;
    status: number;
    publish_date: string;
    content: string;
    _id?: string;
    "@timestamp"?: string;
}

zinsearch.Document.Update<DocFile>('pantuitool_files', '29XwbtcCJri', {
    tiltle: "我是神仙",
    status: 1,
    publish_date: "2024-07-18T00:00:00.000Z",
    content: "神仙很快活特别快活",
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
})