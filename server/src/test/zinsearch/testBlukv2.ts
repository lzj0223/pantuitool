
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

zinsearch.Document.Bulkv2<DocFile>('pan_share_files', [{
    tiltle: "德化陶瓷",
    status: 0,
    publish_date: "2024-07-18T00:00:00.000Z",
    content: "德化陶瓷历史悠久，是世界陶瓷之都",
    "@timestamp": "2024-07-18T00:00:00.000Z"
}]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
})