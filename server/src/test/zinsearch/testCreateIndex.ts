import { AxiosError } from 'axios';
import '../../pre-start';
import zinsearch from "../../core/zinsearch";

const config: IZIndex = {
    "name": "pan_share_files",
    "storage_type": "disk",
    "settings": {
        "analysis": {
            "analyzer": {
                "default": {
                    "type": "gse_standard"
                }
            }
        }
    },
    "mappings": {
        "properties": {
            "_id": {
                "type": "keyword",
                "index": true,
                "store": false,
                "sortable": true,
                "aggregatable": false,
                "highlightable": false
            },
            "@timestamp": {
                "type": "date",
                "index": true,
                "store": false,
                "sortable": true,
                "aggregatable": true,
                "highlightable": false
            },
            "id": {
                "type": "keyword",
                "index": true,
                "store": true,
                "sortable": true,
                "aggregatable": true,
                "highlightable": false
            },
            "title": {
                "type": "text",
                "index": true,
                "store": true,
                "sortable": false,
                "aggregatable": false,
                "highlightable": true
            },
            "files": {
                "type": "text",
                "index": true,
                "store": true,
                "sortable": false,
                "aggregatable": false,
                "highlightable": true
            },
            "site": {
                "type": "numeric",
                "index": true,
                "store": true,
                "sortable": false,
                "aggregatable": true,
                "highlightable": false
            },
            "state": {
                "type": "numeric",
                "index": true,
                "store": true,
                "sortable": false,
                "aggregatable": true,
                "highlightable": false
            }
        }
    }
}




zinsearch.Index.Create(config).then((resp) => {
    console.log(resp)
}).catch((err: AxiosError<unknown, unknown>) => {
    console.log(err.response?.data)
}) 