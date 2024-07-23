
import SearchType from '../../zinsearch/search/searchType';
import '../../pre-start';
import zinsearch from "../../zinsearch";


interface DocFile {
    tiltle: string;
    status: number;
    publish_date: string;
    content: string;
    _id?: string;
    "@timestamp": string;
}

zinsearch.Search<DocFile>('pantuitool_files', {
    search_type: SearchType.QueryString,
    from: 0,
    max_results: 10,
    sort_fields: ['-@timestamp'],
    _source: [],
    query: {
        term: '神仙 +status:0',
    },
    highlight: {
        fields: {
            content: {

            }
        }
    }
}).then((res) => {
    res.hits.hits.forEach((hit) => {
        console.log(hit);
    })
}).catch((err) => {
    console.error(err);
})