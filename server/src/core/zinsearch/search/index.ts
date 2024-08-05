import SearchType from './searchType';
import Request from '../request';


interface SearchParams {
    search_type: SearchType;
    query?: unknown;
    from: number;
    max_results: number;
    sort_fields: string[];
    _source?: string[];
    highlight?: ZincHighlight;
}


interface SearchResponse<S> {
    took: number;
    timed_out: boolean;
    max_score: number;
    hits: {
        total: {
            value: number;
        };
        hits: Docoment<S>[];
    };
    buckets?: unknown; // 如果有buckets字段，可以定义其类型，否则使用any
    error: string;
}


export default async function Search<S>(index: string, params: SearchParams): Promise<SearchResponse<S>> {
    const resp = await Request.post(`/api/${index}/_search`, params)
    return resp.data as SearchResponse<S>
}