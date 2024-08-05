import '../../pre-start';
import zinsearch from "../../core/zinsearch";

zinsearch.Searchv2('pantuitool_files', {
    from: 0,
    size: 10,
    _source: [],
    query: {
        bool: {
            must: [
                {
                    term: {
                        status: {
                            value: "0",
                        }
                    }
                },
                {
                    match: {
                        content: {
                            query: "神仙",
                            analyzer: "gse_search"
                        }
                    }
                }
            ]
        }
    },
    highlight: {
        fields: {
            content: {}
        }
    }
}).then((res) => {
    res.hits.hits.forEach((hit) => {
        console.log(hit);
    })
}).catch((err) => {
    console.error(err);
})